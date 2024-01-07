import { NextResponse } from "next/server";
import { z } from "zod";
import { createStripeClient } from "../../../../lib/stripe.server";
import http from "@/lib/http-status-codes";
import { supabaseWithServiceRoleForServer } from "@/lib/supabase.server";
import { env } from "@/lib/env.server";




export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const stripe = createStripeClient();
    const reqText = await req.text();

    const stripeSignature = z.string().parse(req.headers.get("Stripe-Signature"));
    const event = await stripe.webhooks.constructEventAsync(reqText, stripeSignature, env.STRIPE_WEBHOOK_SIGNING_SECRET);

    console.info("Stripe webhook event:", event.type);
    console.info(event.data.object);

    switch (event.type) {





      case 'customer.created':
        const customerCreated = z.object({
          id: z.string(),
          metadata: z.object({
            user_id: z.string(),
          }),
        }).parse(event.data.object);

        await supabaseWithServiceRoleForServer
          .from("stripe_customers")
          .insert([{
            user_id: customerCreated.metadata.user_id,
            stripe_Id: customerCreated.id,
          }]);

        return NextResponse.json({});



      case 'customer.deleted':
        const customerDeleted = z.object({
          id: z.string(),
        }).parse(event.data.object);

        await supabaseWithServiceRoleForServer
          .from("stripe_customers")
          .delete()
          .eq("stripe_Id", customerDeleted.id)
          .throwOnError();

        return NextResponse.json({});





      case 'customer.subscription.created':
        const customerSubscriptionCreated = z.object({
          id: z.string(),
          status: z.enum(['incomplete', 'incomplete_expired', 'trialing', 'active', 'past_due', 'canceled', 'unpaid']),
          customer: z.string(),
          items: z.object({
            data: z.array(
              z.object({
                price: z.object({
                  id: z.string()
                })
              })
            )
          }),
          metadata: z.object({
            user_id: z.string(),
          }),
        }).parse(event.data.object);

        await supabaseWithServiceRoleForServer
          .from("stripe_subscriptions")
          .insert([{
            stripe_id: customerSubscriptionCreated.id,
            stripe_price_id: customerSubscriptionCreated.items.data[0].price.id,
            stripe_customer_id: customerSubscriptionCreated.customer,
            user_id: customerSubscriptionCreated.metadata.user_id,
            stripe_status: customerSubscriptionCreated.status,
          }])
          .throwOnError();

        return NextResponse.json({});





      case 'customer.subscription.deleted':
        const customerSubscriptionDeleted = z.object({
          id: z.string(),
        }).parse(event.data.object);

        await supabaseWithServiceRoleForServer
          .from("stripe_subscriptions")
          .update({
            deleted_at: new Date().toISOString(),
          })
          .eq("stripe_id", customerSubscriptionDeleted.id)
          .throwOnError();

        return NextResponse.json({});





      case 'customer.subscription.updated':
        const customerSubscriptionUpdated = z.object({
          id: z.string(),
          // status is active for canceled subscriptions, because they will be canceled at the end of the period
          status: z.enum(['incomplete', 'incomplete_expired', 'trialing', 'active', 'past_due', 'canceled', 'unpaid']),
          canceled_at: z.number().nullable(),
          customer: z.string(),
          items: z.object({
            data: z.array(
              z.object({
                price: z.object({
                  id: z.string(),
                }),
              }),
            ),
          }),
          metadata: z.object({
            user_id: z.string(),
          }),
        }).parse(event.data.object);

        await supabaseWithServiceRoleForServer
          .from("stripe_subscriptions")
          .update({
            stripe_customer_id: customerSubscriptionUpdated.customer,
            user_id: customerSubscriptionUpdated.metadata.user_id,
            stripe_status: customerSubscriptionUpdated.status,
            canceled_at: customerSubscriptionUpdated.canceled_at ? new Date(customerSubscriptionUpdated.canceled_at * 1000).toISOString() : null,
          })
          .eq("stripe_id", customerSubscriptionUpdated.id)
          .throwOnError();

        return NextResponse.json({});





      case 'invoice.payment_succeeded':
        const invoicePaymentSucceeded = z.object({
          status: z.string(),
          customer: z.string(),
          lines: z.object({
            data: z.array(
              z.object({
                period: z.object({
                  end: z.number(),
                  start: z.number(),
                }),
                price: z.object({
                  id: z.string(),
                }),
              }),
            ),
          }),
          id: z.string(),
          subscription_details: z.object({
            id: z.string(),
            metadata: z.object({
              user_id: z.string(),
            }),
          }),
        }).parse(event.data.object);

        const lineItem = invoicePaymentSucceeded.lines.data[0];

        await supabaseWithServiceRoleForServer
          .from("stripe_invoices")
          .insert([{
            stripe_id: invoicePaymentSucceeded.id,
            stripe_customer_id: invoicePaymentSucceeded.customer,
            period_end: new Date(lineItem.period.end * 1000).toISOString(),
            period_start: new Date(lineItem.period.start * 1000).toISOString(),
            user_id: invoicePaymentSucceeded.subscription_details.metadata.user_id,
          }])
          .throwOnError();

        return NextResponse.json({});





      default:
        throw new Error(`Unhandled event type ${event.type}`);

    }

  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json({ error }, { status: http.INTERNAL_SERVER_ERROR });
  }
};




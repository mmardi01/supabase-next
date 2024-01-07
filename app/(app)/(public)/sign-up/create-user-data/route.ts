import http from "@/lib/http-status-codes";
import { supabaseWithServiceRoleForServer } from "@/lib/supabase.server";
import { NextResponse } from "next/server";
import { z } from "zod";

export const dynamic = 'force-dynamic';



export async function POST(request: Request) {
  try {
    const zodResult = z.object({
      user_id: z.string().min(1),
      full_name: z.string().min(1),
    }).safeParse(await request.json());

    if (zodResult.success === false) return NextResponse.json({ error: "Invalid form data." }, { status: http.UNPROCESSABLE_ENTITY });
    const req = zodResult.data;

    await supabaseWithServiceRoleForServer.from("users").insert({
      user_id: req.user_id,
      full_name: req.full_name,
    }).throwOnError();

    return NextResponse.json({});
  } catch (error: unknown) {
    console.error("Unknown error occurred. Error:", error);
    return NextResponse.json({ error: "Unknown error occurred." }, { status: http.INTERNAL_SERVER_ERROR });
  }
}

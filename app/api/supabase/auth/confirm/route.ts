import { env } from '@/lib/env.server';
import { createSupabaseForRouteHandler } from '@/lib/supabase.server';
import { type EmailOtpType } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get('token_hash');
  const type = searchParams.get('type') as EmailOtpType | null;
  const next = searchParams.get('next') ?? '/';

  if (!(token_hash && type)) {
    console.error('Missing token_hash or type');
    // return the user to an error page with some instructions
    return NextResponse.redirect(`${env.NEXT_PUBLIC_ORIGIN}/api/supabase/auth/confirm/link-malformed/`);
  }

  const supabase = createSupabaseForRouteHandler();

  let userSessionData; {
    const response = await supabase.auth.verifyOtp({ type, token_hash });

    if (response.error) {
      console.error(response.error.message);
      // return the user to an error page with instructions
      return NextResponse.redirect(`${env.NEXT_PUBLIC_ORIGIN}/api/supabase/auth/confirm/link-did-not-work`);
    }

    userSessionData = response.data;
  }

  update_user_data: {
    if (!userSessionData.user) {
      console.error('Missing user data');
      // return the user to an error page with instructions
      return NextResponse.redirect(`${env.NEXT_PUBLIC_ORIGIN}/api/supabase/auth/confirm/couldnt-create-user-metadata`);
    }

    const result = await supabase
      .from('users')
      .insert({
        user_id: userSessionData.user.id,
        email: userSessionData.user.email,
        full_name: userSessionData.user.user_metadata.full_name,
      });

    if (result.error) {
      console.error('Error inserting user into database');
      console.error(result.error);
      // return the user to an error page with instructions
      return NextResponse.redirect(`${env.NEXT_PUBLIC_ORIGIN}/api/supabase/auth/confirm/couldnt-create-user-metadata`);
    }
  }

  if (type === "email_change") {
    return NextResponse.redirect(`${env.NEXT_PUBLIC_ORIGIN}/profile`);
  }

  return NextResponse.redirect(`${env.NEXT_PUBLIC_ORIGIN}${next}`);
}
import { env } from '@/lib/env.server';
import { createSupabaseForRouteHandler } from '@/lib/supabase.server';
import { NextResponse } from 'next/server';
import { z } from 'zod';


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/';

  if (!code) {
    console.error('Missing code');
    // return the user to an error page with instructions
    return NextResponse.redirect(`${env.NEXT_PUBLIC_ORIGIN}/api/supabase/auth/callback/link-malformed/`);
  }

  const supabase = createSupabaseForRouteHandler();

  let userSessionData; {
    const response = await supabase.auth.exchangeCodeForSession(code);

    if (response.error) {
      console.error(response.error.message);
      // return the user to an error page with instructions
      return NextResponse.redirect(`${env.NEXT_PUBLIC_ORIGIN}/api/supabase/auth/callback/link-did-not-work/`);
    }

    userSessionData = response.data;
  }

  let userMetaData; {
    const result = z.object({
      name: z.string(),
      email: z.string(),
      picture: z.string(),
      full_name: z.string(),
      avatar_url: z.string(),
    }).safeParse(userSessionData.user.user_metadata);

    if (result.success === false) {
      console.error('Invalid user metadata');
      console.error(result.error);
      // return the user to an error page with instructions
      return NextResponse.redirect(`${env.NEXT_PUBLIC_ORIGIN}/api/supabase/auth/callback/couldnt-create-user-metadata`);
    }

    userMetaData = result.data;
  }

  {
    const result = await supabase
      .from('users')
      .insert({
        user_id: userSessionData.user.id,
        email: userSessionData.user.email,
        full_name: userMetaData.full_name,
        profile_picture_src: userMetaData.avatar_url,
      });

    if (result.error) {
      console.error('Error inserting user into database');
      console.error(result.error);
      // return the user to an error page with instructions
      return NextResponse.redirect(`${env.NEXT_PUBLIC_ORIGIN}/api/supabase/auth/callback/couldnt-create-user-metadata`);
    }
  }

  return NextResponse.redirect(`${env.NEXT_PUBLIC_ORIGIN}${next}`);
}
"use client";

import { env } from "@/lib/env.client";
import { supabaseForClientComponent } from "@/lib/supabase.client";
import * as Supabase from "@supabase/supabase-js";


export async function authenticateUsingGoogle(): Promise<never> {
  const redirectTo = `${env.NEXT_PUBLIC_ORIGIN}/api/supabase/auth/callback`;

  console.error(``
    + `Add this redirect url to the Supabase settings.\n`
    + "Redirect URL:"
    + redirectTo + "\n"
    + "Supabase Settings:"
    + `https://supabase.com/dashboard/project/_/auth/url-configuration`
    + "After that, remove this error message from the code."
  );
  alert("Check the console log to fix this issue.");
  throw new Error("Redirect URL not configured on Supabase.");

  return await supabaseForClientComponent.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
      // scopes: "https://www.googleapis.com/auth/drive.file"
    },
  }) as never;
}


export async function authenticateUsingPassword(credentials: Supabase.SignInWithPasswordCredentials) {
  return await supabaseForClientComponent.auth.signInWithPassword(credentials);
}


export async function signupUsingPassword(props: { full_name: string; email: string; password: string; }) {
  return await supabaseForClientComponent.auth.signUp({
    email: props.email,
    password: props.password,
    options: {
      data: {
        full_name: props.full_name,
      },
    },
  });
}
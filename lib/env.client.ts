"use client";

import { z } from "zod";

// On the client Next.js exposes the env variables starting with NEXT_
// by replacing the process.env.NEXT_PUBLIC_ENV_VARIABLE name in the code with the actual value

export const env = {
  NEXT_PUBLIC_ORIGIN: z.string().min(1).parse(process.env.NEXT_PUBLIC_ORIGIN),

  NEXT_PUBLIC_SUPABASE_URL: z.string().min(1).parse(process.env.NEXT_PUBLIC_SUPABASE_URL),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1).parse(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),

  // NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().min(1).parse(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID),
};

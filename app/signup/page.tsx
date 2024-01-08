import Link from "next/link";
import React from "react";
import { supabaseForClientComponent } from "@/lib/supabase.client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function page() {
  const router = useRouter();
  // const use


  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 w-[300px]">
        <h1 className="font-bold text-3xl">Sign Up</h1>
        <form className="flex flex-col gap-4 w-full" action="">
          <input
            type="email"
            placeholder="Email"
            className="h-[50px] outline-none bg-transparent border-gray-500 border-2 rounded-lg px-8"
          />
          <input
            type="password"
            placeholder="Password"
            className="h-[50px] outline-none bg-transparent border-gray-500 border-2 rounded-lg px-8"
          />
          <button className="h-[50px] bg-blue-500 rounded-lg">Sign Up</button>
        </form>
        <p className="text-sm font-light">
        Already have an account??{" "}
          <Link href={"/signin"}>
            <span className="font-bold">Sign In</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { supabaseForClientComponent } from "@/lib/supabase.client";

type Formvalues = {
  email: string;
  password: string;
};

export default function page() {
  const router = useRouter();
  const form = useForm<Formvalues>();
  const { register, handleSubmit, formState,} = form;
  const { errors } = formState;
  const [error, setError] = useState("");
  const onSubmit = async (data: Formvalues) => {
    const res = await supabaseForClientComponent.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });
    if (res.error) setError(res.error.message);
    else router.push("/");
  };

  const getUser = async () => {
    const data = await supabaseForClientComponent.auth.getUser();
    if (data.data.user) router.push("/");
  };

  useEffect(() => {
    getUser();
  }, []);
  
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 w-[300px]">
        <h1 className="font-bold text-3xl">Sign In</h1>
        <form
          className="flex flex-col gap-5 w-full"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Email"
              className="h-[50px] outline-none bg-transparent w-full border-gray-500 border-2 rounded-lg px-8"
              {...register("email", {
                required: "this field is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
            <p className="absolute text-sm text-[#ff2c2c]">
              {errors.email?.message}
            </p>
          </div>
          <div className="relative w-full">
            <input
              type="password"
              placeholder="Password"
              className="h-[50px] w-full outline-none bg-transparent border-gray-500 border-2 rounded-lg px-8"
              {...register("password", {
                required: "this field is required",
                minLength: {
                  value: 8,
                  message: "atleast 8 characters",
                },
              })}
            />
            <p className="absolute text-sm text-[#ff2c2c]">
              {errors.password?.message}
            </p>
          </div>
          <button type="submit" className="h-[50px] bg-blue-500 rounded-lg">
            Sign In
          </button>
        </form>
        <p className="text-sm text-[#ff2c2c]">{error}</p>
        <p className="text-sm font-light">
          Don’t have account?{" "}
          <Link href={"/signup"}>
            <span className="font-bold">Create an account</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

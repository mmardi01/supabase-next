import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 w-[300px]">
        <h1  className="font-bold text-3xl">Sign In</h1>
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
          Don’t have account?{" "}
          <Link href={"/signup"}>
            <span className="font-bold">Create an account</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

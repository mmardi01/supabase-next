'use client'
import { supabaseForClientComponent } from "@/lib/supabase.client";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/router";



function page() {
  const [name, setName] = useState("");
  // const router = useRup
  const createBusiness = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {data :{user}, error} = await supabaseForClientComponent.auth.getUser();
    // if(error)

    const { data, error } = await supabaseForClientComponent
      .from("business")
      .insert([{ name: name, user: "otherValue" }])
      .select();
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        onSubmit={createBusiness}
        className="w-[300px] flex flex-col items-center gap-5"
      >
        <h1 className="text-2xl">Create a new business</h1>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="w-full bg-transparent outline-none border border-gray-500 h-[50px] rounded-lg"
        />
        <button className="w-full bg-green-700 h-[50px] rounded-lg">
          Create
        </button>
      </form>
    </div>
  );
}

export default page;

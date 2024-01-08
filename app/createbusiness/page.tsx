"use client";
import { supabaseForClientComponent } from "@/lib/supabase.client";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

function page() {
  const [name, setName] = useState("");
  const router = useRouter();
  const [formError, setError] = useState("");
  async function createBusiness(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (name.length === 0) {
      setError("business name is empty");
      return;
    }
    const {
      data: { user },
      error,
    } = await supabaseForClientComponent.auth.getUser();
    if (error) router.push("/");
    const data = await supabaseForClientComponent
      .from("business")
      .insert([{ name: name, user_id: user?.id, email: user?.email }])
      .select();
    if (data.error) setError(data.error.message);
    router.push("/");
  }
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
          placeholder="business name"
          className="px-5 w-full bg-transparent outline-none border border-gray-500 h-[50px] rounded-lg"
        />
        <button className="w-full bg-green-700 h-[50px] rounded-lg">
          Create
        </button>
        <p className="text-red-500">{formError}</p>
      </form>
    </div>
  );
}

export default page;

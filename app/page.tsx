"use client";
import { supabaseForClientComponent } from "@/lib/supabase.client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
 
  const getUser = async () => {
      const data = await supabaseForClientComponent.auth.getUser();
      if (!data.data.user)
        router.push('/signin');
  };

  useEffect(() => {
    getUser();
  },[]);

  return( 
    <div>Home</div>
  ); 
}

"use client";
import { supabaseForClientComponent } from "@/lib/supabase.client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { beforeEach } from "node:test";
import Businesses from "@/components/Businesses";
import Link from "next/link";

export default function Page() {
  const router = useRouter();
  const [isLoding, setIsLoading] = useState(true);
  const getData = async () => {
    const user = await supabaseForClientComponent.auth.getUser();
    if (!user.data.user){
      router.push("/signin");
    } 
    else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full flex flex-col items-center p-10 gap-10">
      {isLoding ? (
        <p>Loading...</p>
      ) : (
        <>
          <Link
            href={"/createbusiness"}
            className="w-[250px]  bg-green-700 rounded-md text-center py-3"
          >
            Create Business
          </Link>
          <Businesses />
        </>
      )}
    </div>
  );
}

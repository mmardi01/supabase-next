import { useEffect, useState } from "react";
import { supabaseForClientComponent } from "@/lib/supabase.client";
import Business from "./Business";

export type Business = {
  id: string;
  name: string;
  user_id: string;
  email: string;
  created_at: string;
};

export default function Businesses() {
  const [businesses, setBisness] = useState<Business[] | null>(null);
  const getData = async () => {
    let { data: business, error } = await supabaseForClientComponent
      .from("business")
      .select("*");
      console.log(business);
    setBisness(business);
  };

  useEffect(() => {
    getData();
  },[]);

  return (
    <div className="w-[80%]">
      {businesses?.map((business, index) => (
        <Business data={business} key={index} />
      ))}
    </div>
  );
}

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
  const [businesses, setBusiness] = useState<Business[] | null>(null);
  const [isLoading, updateIsLoading] = useState(true);
  const getData = async () => {
    let { data: business, error } = await supabaseForClientComponent
      .from("business")
      .select("*");
    setBusiness(business);
    updateIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-[80%] flex flex-col gap-4">
      {!isLoading ? (
        businesses?.length ?
        businesses?.map((business, index) => (
          <Business data={business} key={index} />
        )).reverse()
        :
        <h1 className="text-center">No businesses yet</h1>
      ) : (
        <p className="text-center">loading...</p>
      )}
     
    </div>
  );
}

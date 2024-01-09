import React, { Dispatch, SetStateAction, useState } from "react";
import { Business } from "./Businesses";
import { supabaseForClientComponent } from "@/lib/supabase.client";
import { date } from "zod";


export default function Delete({
  setDisplayDelete,
  business,
}: {
  setDisplayDelete: Dispatch<SetStateAction<boolean>>;
  business: Business;
}) {
  const [error, setError] = useState("");
  const handleDelete = async () => {
    const { error } = await supabaseForClientComponent
      .from("business")
      .delete()
      .eq("id", business.id);
      if (error)
        setError(error.message);
      else 
        setDisplayDelete(false);
  };

  return (
    <div className=" inset-0 fixed bg-[#000000dd] flex justify-center items-center">
      <div className="w-[400px] h-[500px] flex flex-col  items-center justify-center gap-4 bg-zinc-950 rounded-lg">
        <h1 className="text-center">
          Are you sure you want to delete "{business.name}" business ?
        </h1>
        <button
          className="w-[80%] bg-red-500 h-[50px] rounded-lg"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          className="w-[80%] bg-gray-600 h-[50px] rounded-lg"
          onClick={() => setDisplayDelete(false)}
        >
          Cancel
        </button>
        <p>{error}</p>
      </div>
    </div>
  );
}

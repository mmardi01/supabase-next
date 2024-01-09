import React, { Dispatch, SetStateAction, useState } from "react";
import { Business } from "./Businesses";
import { supabaseForClientComponent } from "@/lib/supabase.client";
import { useRouter } from "next/navigation";

export default function Edit({
  setDisplayEdit,
  business,
}: {
  setDisplayEdit: Dispatch<SetStateAction<boolean>>;
  business:Business
}) {

  const [name, setName] = useState(business.name);
  const [error, setError] = useState('');
  const router = useRouter()

  const handleSave = async () => {
    if (name.length === 0) {
      setError('business name is empty');
      return;
    }
    const { data, error } = await supabaseForClientComponent
    .from('business')
    .update({ name: name })
    .eq('id', business.id)
    .select()
    if(error)
      setError(error.message);
    else {
      location.reload();
    }
            
  }

  return (
    <div className=" inset-0 fixed bg-[#000000dd] flex justify-center items-center">
      <div className="w-[400px] h-[500px] flex flex-col  items-center justify-center gap-4 bg-zinc-950 rounded-lg">
        <h1>Edit "{business.name}" business</h1>
        <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="w-[80%] bg-transparent outline-none px-5 border border-gray-500 h-[50px] rounded-lg" />
        <p className="text-red-600">{error}</p>
        <button className="w-[80%] bg-green-700 h-[50px] rounded-lg" onClick={handleSave}>Save</button>
        <button className="w-[80%] bg-gray-600 h-[50px] rounded-lg" onClick={() => setDisplayEdit(false)}>Cancel</button>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { Business } from "./Businesses";
import { supabaseForClientComponent } from "@/lib/supabase.client";
import Edit from "./Edit";
import Delete from "./Delete";

export default function Business({ data }: { data: Business }) {
  const date = new Date(data.created_at).toLocaleString();
  const [isOwner, setOwner] = useState(false);
  const [displayEdit,setDisplayEdit] = useState(false);
  const [displayDelete,setDisplayDelete] = useState(false);
  const getUser = async () => {
    const {
      data: { user },
      error,
    } = await supabaseForClientComponent.auth.getUser();
    if (data.user_id === user?.id) setOwner(true);
  };
  useEffect(() => {
    getUser();
  },[]);

  return (
    <div className="w-full flex flex-col h-[200px] rounded-lg border p-5 border-gray-500">
      <div>
        <h1 className="font-bold text-3xl">{data.name}</h1>
        <h3 className="">by: {data.email}</h3>
      </div>
      <div className="mt-auto flex">
        <div className="flex gap-1">
          {isOwner ? (
            <>
              <button onClick={() => setDisplayEdit(true)} className="bg-green-500 w-16 py-1 rounded-md">
                Edit
              </button>
              <button onClick={() => setDisplayDelete(true)}  className="bg-red-500 w-16 py-1 rounded-md">
                Delete
              </button>
            </>
          ) : null}
        </div>
        <p className="ml-auto">posted at: {date}</p>
        {
        displayEdit ?
        <Edit business={data} setDisplayEdit={setDisplayEdit}></Edit>
        :
        null
      }
       {
        displayDelete ?
        <Delete business={data} setDisplayDelete={setDisplayDelete}/>
        :
        null
      }
      </div>
    </div>
  );
}

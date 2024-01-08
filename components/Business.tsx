import { Business } from "./Businesses";

export default function Business({ data }: { data: Business }) {
  const date = new Date(data.created_at).toLocaleString();
  return (
    <div className="w-full flex flex-col h-[200px] rounded-lg border p-5 border-gray-500">
      <div>
        <h1 className="font-bold text-3xl">{data.name}</h1>
        <h3 className="">by: {data.email}</h3>
      </div>
      <p className="mt-auto ml-auto">posted at: {date}</p>
    </div>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Invalid link",
};



export default async function Page() {
  return (
    <p>The link you opened is not a valid authentication link.</p>
  );
}
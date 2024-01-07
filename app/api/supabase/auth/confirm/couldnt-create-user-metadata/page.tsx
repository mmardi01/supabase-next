import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "The confirmation link didn't work",
};


export default async function Page() {
  return (
    <article>
      <h2>Couldn't create the metadata for your account</h2>
      <p>Possible reasons:</p>
      <ul>
        <li>The metadata was not added during the signup process.</li>
        <li>The Supabase insert operation failed.</li>
      </ul>
    </article>
  );
}
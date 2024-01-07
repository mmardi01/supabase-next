import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "The confirmation link didn't work",
};


export default async function Page() {
  return (
    <article>
      <h2>The confirmation link didn&apos;t work</h2>
      <p>Possible reasons:</p>
      <ul>
        <li>You already confirmed your user account via this link. You should try <Link href="/login">logging in</Link>.</li>
        <li>Your link has expired. Try requesting a new link.</li>
        <li>Your account was deleted.</li>
      </ul>
    </article>
  );
}
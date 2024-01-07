import { env } from "@/lib/env.server";
import Script from "next/script";
import React from "react";



export default async function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body>

        {children}

        <Script src={`https://www.googletagmanager.com/gtag/js?id=${env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
        </Script>

      </body>
    </html>
  );
}

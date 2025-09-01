// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import HomeLayout from "@/components/HomeLayout";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/next-auth";
import type { ReactNode } from "react";
import type { User } from "next-auth";

export const metadata: Metadata = {
  title: "Conces",
  description: "faithful and committed to the cause of Christ",
  icons: { icon: "/images/logo.png" },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await getServerSession(authOptions);
  const user: User | null = session?.user ?? null;

  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PRR6FNLR');`,
          }}
        />
      </head>
      <body className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PRR6FNLR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <HomeLayout user={user}>{children}</HomeLayout>
      </body>
    </html>
  );
}

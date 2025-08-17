"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";
import Header from "./home/Header";
import Footer from "./home/Footer";
import { User } from "next-auth";

function HomeLayout({ children,user }: { children: ReactNode;user:User | null}) {
  return (
    <SessionProvider>
        <Header user={user} />
        <main>{children}</main>
        <Footer />
    </SessionProvider>
  );
}

export default HomeLayout;

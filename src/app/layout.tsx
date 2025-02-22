"use client";
import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer";
import "./globals.css";
import dynamic from "next/dynamic";
import { Unbounded } from "next/font/google";

type RootLayoutProps = {
  children: React.ReactNode;
};

const unbounded = Unbounded({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400"],
});

const ChatBlurb = dynamic(() => import("../components/ChatBlurb"), {
  ssr: false,
  loading: () => <div></div>,
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen overflow-x-hidden ${unbounded.className}`}
        data-theme="lemonade"
      >
        <Navbar />

        <main className="flex-grow">{children}</main>
        <ChatBlurb />
        <Footer />
      </body>
    </html>
  );
}

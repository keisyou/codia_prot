import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./reset.css";
import "./globals.css";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";
import { Header } from "@/components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Codia",
  description:
    "Codia（コーディア）はプログラミング初学者向けの技術Q&Aサイトです。実現したいことや発生したエラーについての質問や回答など知識の共有を行うことができます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TanstackQueryProvider>
          <Header />
          {children}
        </TanstackQueryProvider>
      </body>
    </html>
  );
}

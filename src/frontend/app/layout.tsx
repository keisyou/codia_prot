import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./reset.css";
import "./globals.css";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";
import { Header } from "@/components/Header";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getUser } from "@/api/users/getUser";

const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Codia",
  description:
    "Codia（コーディア）はプログラミング初学者向けの技術Q&Aサイトです。実現したいことや発生したエラーについての質問や回答など知識の共有を行うことができます。",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TanstackQueryProvider>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <Header />
            {children}
          </HydrationBoundary>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}

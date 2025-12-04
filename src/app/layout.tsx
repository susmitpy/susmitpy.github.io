"use client";
import Head from "next/head";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <Head>
        <title>Susmit Vengurlekar | Data Systems Architect</title>
        <meta name="description" content="Architecting Data Systems & Interfaces - Bridging complex Backend pipelines with intuitive Frontend experiences." />
        <meta name="theme-color" content="#0a0a0a" />
      </Head>
      <body
        className="antialiased bg-[#141414] text-[#e5e5e5] font-sans"
      >
        {children}
      </body>
    </html>
  );
}

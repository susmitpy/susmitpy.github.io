"use client";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <head>
        <title>Susmit Vengurlekar | Data Systems Architect</title>
        <meta name="description" content="Architecting Data Systems & Interfaces - Bridging complex Backend pipelines with intuitive Frontend experiences." />
        <meta name="theme-color" content="#121212" />
        <meta name="google-site-verification" content="uRqoQfBqaoExjqHsZoJbTSH9HgddtkeIznvGyCRnuSE" />
      </head>
      <body
        className="antialiased font-sans"
        style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-primary)' }}
      >
        {children}
      </body>
    </html>
  );
}

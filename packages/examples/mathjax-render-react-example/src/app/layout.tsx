import React from "react";

import { Analytics } from "@vercel/analytics/react";

import { ThemeProvider } from "@/components/theme-provider";

import NextTopLoader from "nextjs-toploader";

import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <NextTopLoader />
            {children}
            <Analytics />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}

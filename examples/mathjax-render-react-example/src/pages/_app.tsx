import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { Analytics } from "@vercel/analytics/react";

import NProgress from "@/components/nprogress";

import "@/styles/globals.css";
import "@/styles/nprogress.css";

const lightTheme = createTheme({
  type: "light",
  className: "light",
  theme: {
    colors: {},
  },
});

const darkTheme = createTheme({
  type: "dark",
  className: "dark",
  theme: {
    colors: {},
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}>
      <NextUIProvider>
        <NProgress />
        <Component {...pageProps} />
        <Analytics />
      </NextUIProvider>
    </ThemeProvider>
  );
}

export default MyApp;

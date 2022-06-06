import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";

import NProgress from "@/components/nprogress";

import "@/styles/globals.css";
import "@/styles/nprogress.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <NProgress />
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;

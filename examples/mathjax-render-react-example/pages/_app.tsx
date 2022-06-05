import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";

import NProgress from "@components/nprogress";

import "@styles/globals.css";
import "@styles/nprogress.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
      <NProgress />
    </NextUIProvider>
  );
}

export default App;

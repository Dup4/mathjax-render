import NProgress from "nprogress";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Progress() {
  const router = useRouter();

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const start = () => {
      if (!timeout) {
        timeout = setTimeout(NProgress.start, 10);
      }
    };

    const done = () => {
      if (timeout) {
        clearTimeout(timeout);
        timeout = undefined as unknown as NodeJS.Timeout;
        NProgress.done();
      }
    };

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", done);
    router.events.on("routeChangeError", done);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", done);
      router.events.off("routeChangeError", done);
    };
  }, [router.events]);

  return <></>;
}

"use client";

import React, { useState, useEffect } from "react";

import Head from "next/head";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { DOMAIN } from "@/lib/constant";

import Footer from "@/components/footer";
import MobileMenu from "@/components/mobile-menu";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function NavItem({ href, text }: any) {
  const pathname = usePathname();
  const isActive = pathname == href;

  return (
    <Link
      href={href}
      className={cn(
        isActive
          ? "font-semibold text-gray-800 dark:text-gray-200"
          : "font-normal text-gray-600 dark:text-gray-400",
        "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all",
      )}>
      <span className="capsize">{text}</span>
    </Link>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Container: React.FC<any> = (props: any) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const pathname = usePathname();
  const meta = {
    title: "MathJax Render",
    description: `Mathjax Render.`,
    image: "/favicon.ico",
    type: "website",
    ...customMeta,
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 flex flex-col min-h-screen">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`${DOMAIN}${pathname}`} />
        <link rel="canonical" href={`${DOMAIN}${pathname}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="MathJax Render" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>

      <div className="flex flex-col justify-center px-8">
        <nav className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900 bg-gray-50  dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
          <div className="ml-[-0.60rem]">
            <MobileMenu />
            <NavItem href="/" text="Home" />
            <NavItem href="/reference" text="Reference" />
          </div>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }>
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5 text-gray-800 dark:text-gray-200">
                {resolvedTheme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </nav>
      </div>

      <main id="skip" className="flex flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export { Container };
export default Container;

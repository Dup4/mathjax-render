import { NextPage } from "next";
import Head from "next/head";
import { ReactNode } from "react";

import ImageWithTheme from "@/components/ImageWithTheme";

import HeadNav from "./headNav";
import styles from "./basicLayouts.module.css";

const BasicLayouts: NextPage<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MathJax Render</title>
        <meta name="description" content="MathJax Render" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeadNav></HeadNav>

      <main>{children}</main>

      <footer className={styles.footer}>
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            <ImageWithTheme
              alt="Vercel Logo"
              light="/vercel-light.svg"
              dark="/vercel-dark.svg"
              width={72}
              height={16}
            >
            </ImageWithTheme>
          </span>
        </a>
      </footer>
    </div>
  );
};

export { BasicLayouts };
export default BasicLayouts;

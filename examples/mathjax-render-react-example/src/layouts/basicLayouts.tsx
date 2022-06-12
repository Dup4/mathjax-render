import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ReactNode } from "react";

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
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export { BasicLayouts };
export default BasicLayouts;

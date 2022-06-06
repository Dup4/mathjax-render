import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MathJaxNodeWithNoSSR } from "@/components/mathjaxNodeWithNoSSR";
import { Grid, Textarea, useInput } from "@nextui-org/react";

import styles from "./index.module.css";
import { useRouter } from "next/router";
// import { useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter();

  const { value: texContent, bindings } = useInput(router.query.tex as string);

  // useEffect(() => {
  //   setTexContent(router.query.tex as string);
  // }, [setTexContent, router.query.tex]);

  return (
    <div className={styles.container}>
      <Head>
        <title>MathJax Render</title>
        <meta name="description" content="MathJax Render" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Grid.Container gap={1} className={styles.main}>
          <Grid>
            <Link href="/reference">reference</Link>
          </Grid>
          <Grid>
            <Textarea
              size="lg"
              width="480px"
              minRows={8}
              maxRows={8}
              bordered
              labelPlaceholder="Please input Tex"
              {...bindings}
            ></Textarea>
          </Grid>
          <Grid>
            <MathJaxNodeWithNoSSR
              tex={texContent}
              display={true}
            ></MathJaxNodeWithNoSSR>
          </Grid>
        </Grid.Container>
      </main>

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

export default Home;

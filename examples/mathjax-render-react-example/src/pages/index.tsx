import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MathJaxNodeWithNoSSR } from "@/components/mathjaxNodeWithNoSSR";
import { Grid, Textarea, useInput } from "@nextui-org/react";

import styles from "./index.module.css";

interface IndexProps {
  tex: string;
}

const Index: NextPage<IndexProps> = ({ tex }) => {
  const { value: texContent, bindings } = useInput(tex);

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

export const getServerSideProps: GetServerSideProps<IndexProps> = async (
  context,
) => {
  return {
    props: { tex: (context.query.tex as string) || "" },
  };
};

export default Index;

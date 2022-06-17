import type { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";

import { Grid, Textarea, useInput } from "@nextui-org/react";

import MathJaxNode from "@/components/mathjaxNode";
import BasicLayouts from "@/layouts/basicLayouts";

import BasicLayoutsStyles from "@/layouts/basicLayouts.module.css";

interface IndexProps {
  tex: string;
}

const Index: NextPage<IndexProps> = ({ tex }) => {
  const { value: texContent, bindings } = useInput(tex);

  return (
    <BasicLayouts>
      <Grid.Container gap={1} className={BasicLayoutsStyles.main}>
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
          <MathJaxNode tex={texContent} display={true}></MathJaxNode>
        </Grid>
      </Grid.Container>
    </BasicLayouts>
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

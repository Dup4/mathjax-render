import type { GetServerSideProps, NextPage } from "next";

import { Grid, Textarea, useInput } from "@nextui-org/react";

import BasicLayouts from "@/layouts/basicLayouts";
import MathJaxNode from "@/components/mathjaxNode";

interface IndexProps {
  tex: string;
}

const Index: NextPage<IndexProps> = ({ tex }) => {
  const { value: texContent, bindings } = useInput(tex);

  return (
    <BasicLayouts>
      <Grid.Container
        gap={1}
        className="flex flex-1 justify-center items-center flex-col"
        style={{ minHeight: "calc(100vh - 300px)" }}>
        <Grid>
          <Textarea
            size="lg"
            width="480px"
            minRows={8}
            maxRows={8}
            bordered
            labelPlaceholder="Please input Tex"
            {...bindings}></Textarea>
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

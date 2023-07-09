"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import type { DynamicOptionsLoadingProps } from "next/dynamic";

import { MathJaxNodeProps } from "mathjax-render-react";

const loading = (props: DynamicOptionsLoadingProps) => {
  return (
    <>
      <div>
        {props.isLoading && <div>Loading MathJax...</div>}
        {props.error !== null && (
          <div>Load MathJax Failed: {props.error?.message}</div>
        )}
      </div>
    </>
  );
};

const MathJaxNode = dynamic(
  async () => (await import("mathjax-render-react")).MathJaxNode,
  {
    loading: loading,
    ssr: false,
  },
) as unknown as React.FC<MathJaxNodeProps>;

export { MathJaxNode };
export default MathJaxNode;

"use client";

import React from "react";
import dynamic from "next/dynamic";

import { MathJaxNodeProps } from "mathjax-render-react";

const MathJaxNode = dynamic(
  async () => (await import("mathjax-render-react")).MathJaxNode,
  {
    ssr: false,
  },
) as unknown as React.FC<MathJaxNodeProps>;

export { MathJaxNode };
export default MathJaxNode;

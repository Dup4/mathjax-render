import dynamic from "next/dynamic";

const MathJaxNodeWithNoSSR = dynamic(
  async () => (await import("mathjax-render-react")).MathJaxNode,
  {
    ssr: false,
  },
);

export { MathJaxNodeWithNoSSR };

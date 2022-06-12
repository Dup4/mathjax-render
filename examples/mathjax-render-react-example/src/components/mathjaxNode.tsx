import dynamic from "next/dynamic";

const MathJaxNode = dynamic(
  async () => (await import("mathjax-render-react")).MathJaxNode,
  {
    ssr: false,
  },
);

export { MathJaxNode };
export default MathJaxNode;

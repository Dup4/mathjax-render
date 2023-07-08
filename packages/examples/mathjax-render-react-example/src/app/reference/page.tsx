import { MathJaxNode } from "mathjax-render-nextjs";

import { Container } from "@/components/container";

import { getTexList } from "@/lib/tex-list";

export default function Page() {
  const texList = getTexList();

  return (
    <Container>
      <div className="flex flex-1 flex-col justify-center items-center">
        {texList.map((tex, index) => (
          <div key={index}>
            <MathJaxNode tex={tex} display={true}></MathJaxNode>
          </div>
        ))}
      </div>
    </Container>
  );
}

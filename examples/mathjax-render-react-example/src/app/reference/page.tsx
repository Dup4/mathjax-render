import { Container } from "@/components/Container";
import { MathJaxNode } from "@/components/mathjaxNode";

import { getTexList } from "@/lib/texList";

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

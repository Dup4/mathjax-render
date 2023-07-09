import { Tex2SVG, CSS } from "mathjax-render";
import { JSDOM } from "jsdom";

export function RenderMathJax(content: string) {
  const dom = new JSDOM(content);
  const needRenderList = dom.window.document.querySelectorAll(
    'script[type^="math/tex"]',
  );

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  for (const node of needRenderList) {
    const mathTex = node.textContent;
    const display = Boolean(node.type.match(/; *mode=display/));
    const result = Tex2SVG(mathTex, display);

    const mjxContainerNode = dom.window.document.createElement("mjx-container");
    mjxContainerNode.setAttribute("class", "MathJax");
    mjxContainerNode.setAttribute("jax", "SVG");
    mjxContainerNode.setAttribute("display", String(display));
    mjxContainerNode.innerHTML = result;

    const mathNode = (() => {
      if (display) {
        const divNode = dom.window.document.createElement("div");
        divNode.setAttribute("class", "arithmatex_display");
        divNode.innerHTML = mjxContainerNode.outerHTML;
        return divNode;
      } else {
        const spanNode = dom.window.document.createElement("span");
        spanNode.setAttribute("class", "arithmatex_inline");
        spanNode.innerHTML = mjxContainerNode.outerHTML;
        return spanNode;
      }
    })();

    const pNode = node.parentNode;
    const ppNode = node.parentNode.parentNode;
    ppNode.insertBefore(mathNode, pNode);
    ppNode.removeChild(pNode);
  }

  if (needRenderList.length > 0) {
    const styleNode = dom.window.document.createElement("style");
    styleNode.id = "MJX-SVG-styles";
    styleNode.innerHTML = CSS;

    const headNode = dom.window.document.querySelector(
      "head",
    ) as HTMLHeadElement;
    headNode.appendChild(styleNode);
  }

  return dom.serialize();
}

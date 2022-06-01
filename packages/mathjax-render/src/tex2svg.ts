// if refer to resources in the `ts` directory,
// `declaration` generation will fail at compile time.

import { mathjax } from "mathjax-full/js/mathjax";
import { TeX } from "mathjax-full/js/input/tex";
import { SVG } from "mathjax-full/js/output/svg";

// import { liteAdaptor } from "mathjax-full/ts/adaptors/liteAdaptor";
import { JSDOM } from "jsdom";
import { jsdomAdaptor } from "mathjax-full/js/adaptors/jsdomAdaptor";

import { RegisterHTMLHandler } from "mathjax-full/js/handlers/html";

// official AllPackages are not comprehensive enough
// import { AllPackages } from "mathjax-full/ts/input/tex/AllPackages";
import { AllPackages } from "./AllPackages";

import util from "util";
import EscapeHTML from "escape-html";

// const adaptor = liteAdaptor();
const adaptor = jsdomAdaptor(JSDOM);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handler = RegisterHTMLHandler(adaptor);

const tex = new TeX({
  packages: AllPackages,
});
const svg = new SVG();
const html = mathjax.document("", {
  InputJax: tex,
  OutputJax: svg,
});

//  Minimal CSS needed for stand-alone image
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CSS = [
  "svg a{fill:blue;stroke:blue}",
  '[data-mml-node="merror"]>g{fill:red;stroke:red}',
  '[data-mml-node="merror"]>rect[data-background]{fill:yellow;stroke:none}',
  "[data-frame],[data-line]{stroke-width:70px;fill:none}",
  ".mjx-dashed{stroke-dasharray:140}",
  ".mjx-dotted{stroke-linecap:round;stroke-dasharray:0,140}",
  "use[data-c]{stroke-width:3px}",
].join("");

function formatErrorMessage(message: string): string {
  const htmlContext = EscapeHTML(message.trim()).split("\n").join("<br>");

  return (
    '<span class="math-rendering-error-message">' + htmlContext + "</span>"
  );
}

function tex2SVG(mathContent: string, display: boolean) {
  const node = html.convert(mathContent, { display });

  // no need mathContent
  // const title = adaptor.create("title");
  // adaptor.append(title, adaptor.text(mathContent));
  // adaptor.insert(title, node.children[0].children[0]);

  return adaptor.innerHTML(node);
}

export function Tex2SVG(mathContent: string, display: boolean) {
  try {
    return tex2SVG(mathContent, display);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    const errorMessage =
      `Failed to render ${display ? "display" : "inline"} math: ` +
      util.inspect(mathContent) +
      "\n" +
      e.toString();
    return formatErrorMessage(errorMessage);
  }
}

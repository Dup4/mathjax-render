// if refer to resources in the `ts` directory,
// `declaration` generation will fail at compile time.

import { mathjax } from "mathjax-full/js/mathjax.js";
import { TeX } from "mathjax-full/js/input/tex.js";
import { SVG } from "mathjax-full/js/output/svg.js";

import { liteAdaptor } from "mathjax-full/js/adaptors/liteAdaptor";
// import { JSDOM } from "jsdom";
// import { jsdomAdaptor } from "mathjax-full/js/adaptors/jsdomAdaptor.js";

import { RegisterHTMLHandler } from "mathjax-full/js/handlers/html.js";

// official AllPackages are not comprehensive enough
// import { AllPackages } from "mathjax-full/ts/input/tex/AllPackages";
import { AllPackages } from "../common/AllPackages";
import { GenerateErrorMessage, GetErrorMessage } from "../common/utils";

// const adaptor = jsdomAdaptor(JSDOM);

const adaptor = liteAdaptor();

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
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
  } catch (e: unknown) {
    return (
      '<span class="mathjax-render-error-message">' +
      GenerateErrorMessage(mathContent, display, GetErrorMessage(e)) +
      "</span>"
    );
  }
}

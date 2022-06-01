import { mathjax } from "mathjax-full/js/mathjax";
import { TeX } from "mathjax-full/js/input/tex";
import { SVG } from "mathjax-full/js/output/svg";
import { browserAdaptor } from "mathjax-full/js/adaptors/browserAdaptor";
import { HTMLHandler } from "mathjax-full/js/handlers/html/HTMLHandler";
import { SafeHandler } from "mathjax-full/js/ui/safe/SafeHandler";

import { AllPackages } from "../AllPackages";

mathjax.handlers.register(SafeHandler(new HTMLHandler(browserAdaptor())));

const mathDocument = mathjax.document(document, {
  InputJax: new TeX({
    packages: AllPackages,
  }),
  OutputJax: new SVG(),
});

// Add CSS styles
mathDocument.updateDocument();

export function Tex2SVG(math: string, display: boolean) {
  try {
    const wrapper = mathDocument.convert(math, {
      display,
    });

    const title = document.createElement("title");
    title.innerText = math;

    const defsElement = wrapper.getElementsByTagName("defs")[0];
    defsElement.parentNode.insertBefore(title, defsElement);

    return wrapper;
  } catch (e) {
    console.log(e);

    const wrapper = document.createElement("mjx-container");
    wrapper.className = "MathJax";
    wrapper.setAttribute("jax", "SVG");
    if (display) wrapper.setAttribute("display", "true");

    const message = document.createElement("span");
    message.innerText = `Failed to render math, ${String(e)}`;
    message.style.fontWeight = "bold";
    message.style.display = "inline-block";
    message.style.border = "2px solid var(--theme-foreground)";
    message.style.padding = "0 4px";

    wrapper.appendChild(message);
    return wrapper;
  }
}

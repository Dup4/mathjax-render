import React from "react";
import { Options, Tex2SVG } from "mathjax-render/browser";
import style from "./mathjax-node.module.less";

export interface MathJaxNodeProps extends Options {
  tex: string;
  display: boolean;
}

export const MathJaxNode: React.FC<MathJaxNodeProps> = (props) => {
  const { tex, display, ...options } = props;

  if (!options.nodeClassNameList) {
    options.nodeClassNameList = [];
    options.nodeClassNameList.push(
      style.MathJax,
      display ? style.block : style.inline,
    );
  }

  if (!options.errorMessageClassNameList) {
    options.errorMessageClassNameList = [];
    options.errorMessageClassNameList.push(style.MathJax, style.errorMessage);
  }

  const html = Tex2SVG(tex, display, options).outerHTML;

  if (display) {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}></div>
    );
  }

  return (
    <span
      dangerouslySetInnerHTML={{
        __html: html,
      }}></span>
  );
};

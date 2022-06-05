import React from "react";
import { Options, Tex2SVG } from "mathjax-render/browser";

export interface MathJaxNodeProps extends Options {
  tex: string;
  display: boolean;
}

export const MathJaxNode: React.FC<MathJaxNodeProps> = (props) => {
  const { tex, display, ...options } = props;

  if (display) {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: Tex2SVG(tex, display, options).outerHTML,
        }}
      ></div>
    );
  }

  return (
    <span
      dangerouslySetInnerHTML={{
        __html: Tex2SVG(tex, display, options).outerHTML,
      }}
    ></span>
  );
};

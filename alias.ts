import { resolve } from "path";

const r = (p: string) => resolve(__dirname, p);

export const alias: Record<string, string> = {
  "mathjax-render": r("./packages/mathjax-render/src/node/"),
  "mathjax-render-for-mkdocs-material": r(
    "./packages/mathjax-render-for-mkdocs-material/src",
  ),
  "mathjax-render-react": r("./packages/mathjax-render-react/src/"),
};

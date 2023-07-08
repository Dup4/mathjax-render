import { resolve } from "path";

const r = (p: string) => resolve(__dirname, p);

export const alias: Record<string, string> = {
  "mathjax-render": r("./packages/libs/mathjax-render/src/node/"),
  "mathjax-render-for-mkdocs-material": r(
    "./packages/libs/mathjax-render-for-mkdocs-material/src",
  ),
  "mathjax-render-react": r("./packages/libs/mathjax-render-react/src/"),
  "mathjax-render-nextjs": r("./packages/libs/mathjax-render-nextjs/src"),
};

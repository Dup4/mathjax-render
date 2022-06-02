import { defineBuildConfig } from "unbuild";

const isBrowser = Boolean(process.env.BROWSER);

export default defineBuildConfig({
  entries: [`src/${isBrowser ? "browser" : "node"}/index`],
  outDir: isBrowser ? "./dist/browser" : "./dist",
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
});

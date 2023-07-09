import { defineBuildConfig, MkdistBuildEntry } from "unbuild";

const isBrowser = Boolean(process.env.BROWSER);

const browserEntry: MkdistBuildEntry = {
  input: "src",
  builder: "mkdist",
  format: "esm",
  ext: "mjs",
};

export default defineBuildConfig({
  entries: isBrowser ? [browserEntry] : ["src/node/index"],
  outDir: isBrowser ? "./dist/esm" : "./dist",
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
});

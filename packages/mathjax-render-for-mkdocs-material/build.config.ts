import path from "path";
import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: ["src/index", "src/cli", "src/RenderMathWorker"],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
  externals: [path.join(__dirname, "./package.json")],
});

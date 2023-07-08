import { BuildContext, defineBuildConfig } from "unbuild";
import { RollupOptions } from "rollup";

import postcss from "rollup-plugin-postcss";
import camelcase from "camelcase";

export default defineBuildConfig({
  entries: ["src/index"],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
  hooks: {
    "rollup:options": (ctx: BuildContext, options: RollupOptions): void => {
      options.plugins?.push(
        postcss({
          inject: true,
          use: ["less"],
          namedExports(name) {
            return camelcase(name);
          },
        }),
      );
    },
  },
});

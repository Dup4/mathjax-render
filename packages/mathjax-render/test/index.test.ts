import glob from "glob";
import path from "path";
import fs from "fs";
import { describe, expect, it } from "vitest";
import { Tex2SVG } from "../src/node/index";

// https://www.svgviewer.dev/

describe("Tex2SVG", () => {
  for (const target of glob.sync(path.join(__dirname, "./test-data/*.data"))) {
    const basename = path.basename(target, ".data");
    it(basename, () => {
      const content = fs.readFileSync(target).toString();
      const result = Tex2SVG(content, true);
      expect(result).toMatchSnapshot();
    });
  }
});

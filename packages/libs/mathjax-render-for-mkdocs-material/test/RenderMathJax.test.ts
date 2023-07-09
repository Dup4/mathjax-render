import glob from "glob";
import path from "path";
import fs from "fs";
import { describe, expect, it } from "vitest";
import { RenderMathJax } from "../src/index";

describe("RenderMathJax", () => {
  for (const target of glob.sync(path.join(__dirname, "./test-data/*.data"))) {
    const basename = path.basename(target, ".data");
    it(basename, () => {
      const content = fs.readFileSync(target).toString();
      const result = RenderMathJax(content);
      expect(result).toMatchSnapshot();
    });
  }
});

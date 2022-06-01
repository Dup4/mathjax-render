import fs from "fs";
import chalk from "chalk";
import { RenderMathJax } from "./RenderMathJax";

const { green, yellow } = chalk;

export default function (filename: string): void {
  const startTime = +new Date();

  const content = fs.readFileSync(filename, "utf8");
  const result = RenderMathJax(content);
  fs.writeFileSync(filename, result, "utf8");

  const endTime = +new Date();

  console.log(
    `${green("INFO")} ${yellow(filename)} rendered finished (${
      (endTime - startTime) / 1000
    }s).`,
  );
}

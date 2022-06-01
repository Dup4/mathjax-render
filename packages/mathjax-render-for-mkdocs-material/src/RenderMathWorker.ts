import fs from "fs";
import chalk from "chalk";
import { RenderMathJax } from "./RenderMathJax";

const { green, yellow } = chalk;

export default function (filename: string): void {
  const startTime = +new Date();

  try {
    const content = fs.readFileSync(filename, "utf8");
    const result = RenderMathJax(content);
    fs.writeFileSync(filename, result, "utf8");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    throw new Error(e.message);
  }

  const endTime = +new Date();

  console.log(
    `${green("INFO")} ${yellow(filename)} rendered finished (${
      (endTime - startTime) / 1000
    }s).`,
  );
}

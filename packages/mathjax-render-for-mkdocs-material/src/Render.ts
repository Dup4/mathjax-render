import glob from "glob";
import { Options } from "./types";
import RenderFile from "./RenderMathWorker";
import Piscina from "piscina";

function render(fileList: string[]) {
  for (const file of fileList) {
    RenderFile(file);
  }
}

async function renderWithWorker(fileList: string[]) {
  const piscina = new Piscina({
    // The URL must be a file:// URL
    filename: new URL("./RenderMathWorker.mjs", import.meta.url).href,
  });

  for (const file of fileList) {
    await piscina.run(file);
  }
}

export async function Render(options: Options) {
  const fileList = glob.sync(options.srcDir + "/**/*.html");

  if (options.useWorker) {
    await renderWithWorker(fileList);
  } else {
    render(fileList);
  }
}

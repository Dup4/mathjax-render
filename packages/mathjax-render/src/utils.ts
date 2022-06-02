import EscapeHTML from "escape-html";
import util from "util";

export function GetErrorMessage(e: unknown) {
  let errMessage = "";

  if (e instanceof Error) {
    errMessage = e.message;
  } else {
    errMessage = String(e);
  }

  return errMessage;
}

export function GenerateErrorMessage(
  mathContent: string,
  display: boolean,
  errMessage: string,
): string {
  const errorMessage =
    `Failed to render ${display ? "display" : "inline"} math: ` +
    util.inspect(mathContent) +
    "\n" +
    errMessage;

  const htmlContext = EscapeHTML(errorMessage.trim()).split("\n").join("<br>");
  return htmlContext;
}

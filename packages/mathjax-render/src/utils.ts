import EscapeHTML from "escape-html";

export function FormatErrorMessage(message: string): string {
  const htmlContext = EscapeHTML(message.trim()).split("\n").join("<br>");

  return (
    '<span class="mathjax-render-error-message">' + htmlContext + "</span>"
  );
}

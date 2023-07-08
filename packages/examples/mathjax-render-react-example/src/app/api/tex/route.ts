import { NextRequest } from "next/server";

import { Tex2SVG } from "mathjax-render";

export function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const tex = searchParams.get("tex") ?? "";
  const svg = Tex2SVG(tex, true);

  return new Response(svg, {
    status: 200,
    headers: { "Content-Type": "image/svg+xml" },
  });
}

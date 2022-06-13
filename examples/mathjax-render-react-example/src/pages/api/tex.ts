import type { NextApiRequest, NextApiResponse } from "next";

import { Tex2SVG } from "mathjax-render";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const tex = (req.query.tex as string) ?? "";
  const svg = Tex2SVG(tex, true);

  res.setHeader("Content-Type", "image/svg+xml");
  res.write(svg);
  res.end();
}

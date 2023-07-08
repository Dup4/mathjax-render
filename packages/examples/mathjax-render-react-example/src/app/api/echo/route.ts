import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const msg = searchParams.get("msg") ?? "";

  const data = {
    msg: msg,
  };

  return NextResponse.json(data);
}

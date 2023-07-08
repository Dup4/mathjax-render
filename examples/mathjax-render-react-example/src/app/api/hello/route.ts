import { NextResponse } from "next/server";

export function GET() {
  const data = {
    msg: "hello",
  };

  return NextResponse.json(data);
}

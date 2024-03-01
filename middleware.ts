import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const allCookies = request.cookies.getAll();
  const response = NextResponse.next();
  console.log("allCookies.length != 0: ", allCookies.length)
  console.log("allCookies.length != 0: ", allCookies.length != 0)
  if (allCookies.length != 0) {
    return response;
  }
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/user", "/fetch"],
};

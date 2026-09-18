import { NextResponse, type NextRequest } from "next/server";
import { isGonePath } from "@/config/legacy-routes";
import { goneHtml } from "@/lib/gone-html";

export function proxy(request: NextRequest) {
  if (!isGonePath(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  return new NextResponse(goneHtml(), {
    status: 410,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "x-robots-tag": "noindex, nofollow",
      "cache-control": "public, max-age=0, must-revalidate",
    },
  });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.svg|opengraph-image|sitemap.xml|robots.txt).*)",
  ],
};

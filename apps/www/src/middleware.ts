import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("refresh_token")?.value;

  if (currentUser && !request.nextUrl.pathname.startsWith("/app")) {
    return Response.redirect(new URL("/app", request.url));
  }

  if (!currentUser && !request.nextUrl.pathname.startsWith("/auth")) {
    return Response.redirect(new URL("/auth/login", request.url));
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.png$|overview$|contact$|blogs$|legal).*)",
  ],
};

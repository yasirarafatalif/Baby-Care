import { getToken } from "next-auth/jwt";
import { useSession } from "next-auth/react";
import { NextResponse } from "next/server";
const privateRoutes = [
  "/private",
  "/dashboard",
  "/services/",
  "/profile",
];
const adminRoutes = ["/dashboard/admin", "/admin"];
const userRoutes = ["/dashboard/user"];

export async function proxy(req) {

  const token = await getToken({ req });
  const reqPath = req.nextUrl.pathname;
  const isAuthenticated = Boolean(token);
  const isUser = token?.role === "user";
  const isAdmin = token?.role === "admin";
  const isPrivate = privateRoutes.some((route) => reqPath.startsWith(route));
  const isAdminRoute = adminRoutes.some((route) => reqPath.startsWith(route));
  const isUserRoute = userRoutes.some((route) => reqPath.startsWith(route));
  // console.log(isPrivate)
  if (!isAuthenticated && isPrivate) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("callbackUrl", reqPath);
    return NextResponse.redirect(loginUrl);

    //  return NextResponse.redirect(new URL('/login', req.url))
  }

  
  //   return NextResponse.redirect(new URL('/home', req.url))

if (isAdminRoute) {
    if (!isAdmin) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
if (isUserRoute) {
    if (!isUser) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();


}

export const config = {
  matcher: [
    "/private/:path*",
    "/dashboard/:path*",
    "/secret/:path*",
    "/services/:path*",
    "/admin/:path*",
    "/profile/:path*",
  ],
};

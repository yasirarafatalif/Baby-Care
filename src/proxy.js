import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
const privateRoutes = ["/private", "/dashboard","/about", "/secret"];
const adminRoutes = ["/dashboard"];
 
// This function can be marked `async` if using `await` inside
export async function proxy(req) {
    const token = await getToken({req})
     const reqPath = req.nextUrl.pathname;
    
    const isAuthenticated = Boolean(token);
    const isUser = token?.role === "user";

  const isAdmin = token?.role === "admin";
  const isPrivate = privateRoutes.some((route) => reqPath.startsWith(route));
  // const isAdminRoute = adminRoutes.some((route) => reqPath.startsWith(route));
  console.log(isPrivate)
  if (!isAuthenticated && isPrivate) {
     const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("callbackUrl", reqPath);
    return NextResponse.redirect(loginUrl);

    //  return NextResponse.redirect(new URL('/login', req.url))
    
    }

    return NextResponse.next()
//   return NextResponse.redirect(new URL('/home', req.url))
}
 
 
// export const config = {
//   matcher: ["/private/:path*", "/dashboard/:path*", "/secret/:path*"],
// };
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip API, static, and Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // If visiting root `/`, redirect to `/en/`
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/en/", request.url));
  }

  return NextResponse.next();
}

// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// const locales = ['en', 'ar']
// const defaultLocale = 'en'

// function getLocale(request: NextRequest) {
//   const pathname = request.nextUrl.pathname
//   const pathnameIsMissingLocale = locales.every(
//     (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
//   )

//   if (pathnameIsMissingLocale) {
//     const locale = request.headers.get('accept-language')?.includes('ar') ? 'ar' : defaultLocale
//     return locale
//   }
// }

// export function middleware(request: NextRequest) {
//   const pathname = request.nextUrl.pathname
//   const pathnameIsMissingLocale = locales.every(
//     (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
//   )

//   if (pathnameIsMissingLocale) {
//     const locale = getLocale(request)
//     return NextResponse.redirect(
//       new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
//     )
//   }
// }

// export const config = {
//   matcher: [
//     '/((?!api|_next/static|_next/image|favicon.ico|locales).*)',
//   ],
// }

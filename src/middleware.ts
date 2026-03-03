import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['fr', 'en']
const defaultLocale = 'fr'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Determine locale from path
  const detectedLocale =
    locales.find((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) ||
    defaultLocale

  // Propagate locale to layout via custom header
  const response = NextResponse.next()
  response.headers.set('x-locale', detectedLocale)

  // First-time visitor on `/` → redirect based on browser language
  if (pathname === '/') {
    const acceptLanguage = request.headers.get('accept-language') || ''
    const browserLocale = acceptLanguage.startsWith('en') ? 'en' : defaultLocale
    if (browserLocale === 'en') {
      return NextResponse.redirect(new URL('/en', request.url))
    }
  }

  return response
}

export const config = {
  matcher: ['/((?!_next|_payload|admin|api|next|favicon|.*\\..*).*)'],
}

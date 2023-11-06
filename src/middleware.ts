import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18nRouter } from 'next-i18n-router'
import i18nConfig from '../i18nConfig'

async function adminMiddleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.redirect(new URL('/admin/auth', req.url))
  }

  return res
}

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith('/admin')) {
    await adminMiddleware(req)
  }

  return i18nRouter(req, i18nConfig)
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
}

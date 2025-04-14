import { i18nRouter } from 'next-i18n-router';
import i18nConfig from './i18nConfig';
import { type NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl
    if (pathname.startsWith('/sitemap.xml')) {
        const newUrl = new URL(req.nextUrl)
        newUrl.pathname = '/sitemap-index'

        return NextResponse.rewrite(newUrl.toString())
    }

    if (pathname.startsWith('/sitemap-0.xml')) {
        const newUrl = new URL(req.nextUrl)
        newUrl.pathname = '/sitemap/0'

        return NextResponse.rewrite(newUrl.toString())
    }

    if (pathname.startsWith('/robots')) {
        const newUrl = new URL(req.nextUrl)
        newUrl.pathname = '/robots.txt'

        return NextResponse.rewrite(newUrl.toString())
    }
    if (pathname.startsWith('/icon')) {
        return NextResponse.rewrite(req.nextUrl)
    }
    return i18nRouter(req, i18nConfig);
}

export const config = {
    matcher: '/((?!api|static|.*\\..*|_next).*)'
};
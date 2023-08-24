import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
    const token = request.cookies.get('@auth')?.value;

    if (!token) {
        if (request.url.includes('/auth') && !request.cookies.has('@auth')) {
            return NextResponse.next();
        }

        const redirectURL = new URL('/auth/login', request.url);
        return NextResponse.redirect(redirectURL, {
            headers: {
                'Set-Cookie': `redirectTo=${request.url}; Path=/; HttpOnly; max-age=20;`,
            },
        });
    }

    if (request.url.includes('/auth') && request.cookies.has('@auth')) {
        return NextResponse.redirect(new URL('/home', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/home/:path*', '/auth/:path*'],
};

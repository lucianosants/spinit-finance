import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('@auth')?.value;
    const redirectURL = new URL('/auth/login', request.url);

    if (!token) {
        return NextResponse.redirect(redirectURL, {
            headers: {
                'Set-Cookie': `redirectTo=${request.url}; Path=/; HttpOnly; max-age=20;`,
            },
        });
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/home/:path*',
};

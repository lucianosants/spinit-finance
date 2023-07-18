import { api } from '@/src/lib/axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const body = await request.json();

    const {
        data: { token },
    } = await api.post('/auth/login', body);
    const redirectUrl = new URL('/');

    const cookieExpires = 60 * 60 * 24 * 7;

    return NextResponse.redirect(redirectUrl, {
        headers: {
            'Set-Cookie': `@auth=${token}; Path=/; max-age=${cookieExpires}`,
        },
    });
}

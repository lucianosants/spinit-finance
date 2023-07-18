import { api } from '@/src/lib/axios';
import { ErrorType } from '@/src/utils/auth';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const body = await request.json();

    try {
        const {
            data: { token },
        } = await api.post('/auth/login', body);

        const redirectUrl = new URL('/', request.url);

        const cookieExpires = 60 * 60 * 24 * 7;

        return NextResponse.redirect(redirectUrl, {
            headers: {
                'Set-Cookie': `@auth=${token}; Path=/; max-age=${cookieExpires}`,
            },
        });

        //eslint-disable-next-line
    } catch (error: any) {
        const { response } = error as ErrorType;
        console.log(response.data);
    }
}

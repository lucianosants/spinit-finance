import decode, { JwtPayload } from 'jwt-decode';
import { cookies } from 'next/headers';

type User = JwtPayload & {
    id: string;
    username: string;
    name: string;
};

export function getUser() {
    const token = cookies().get('@auth')?.value;

    if (!token) {
        throw new Error('Unauthenticated');
    }

    const user = decode<User>(token);

    return user;
}

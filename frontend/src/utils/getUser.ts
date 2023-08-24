import decode, { JwtPayload } from 'jwt-decode';

type User = JwtPayload & {
    id: string;
    username: string;
    name: string;
};

export function getUser(token: string) {
    if (!token) {
        throw new Error('Unauthenticated');
    }

    const user = decode<User>(token);

    return user;
}

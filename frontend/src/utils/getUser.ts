import decode from 'jwt-decode';

type UserProps = {
    id: string;
    username: string;
    name: string;
};

export function getUser(token: string) {
    if (!token) {
        console.log('Unauthenticated');
        return;
    }

    const user: UserProps = decode(token);

    return user;
}

import { AxiosResponse } from 'axios';
import { axios, api } from '../lib/axios';
import { LoginProps } from '../screens/LoginScreen';
import { SignupProps } from '../screens/SignupScreen';

export type ErrorType = AxiosResponse & {
    response: {
        data: {
            error: string;
        };
    };
};

export function auth() {
    const signup = async (data: SignupProps) => {
        const response = await api.post('/users', data);

        return response;
    };

    const login = async (data: LoginProps) => {
        const response = await axios.post('/api/auth/login', data);

        location.replace('/');

        return response;
    };

    return {
        signup,
        login,
    };
}

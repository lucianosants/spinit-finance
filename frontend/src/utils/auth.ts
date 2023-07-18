import { axios } from '../lib/axios';
import { LoginProps } from '../screens/LoginScreen';

export function auth() {
    const login = async (data: LoginProps) => {
        try {
            const response = await axios.post('/api/auth/login', data);

            return response;
        } catch (error) {
            console.log(error);
        }
    };

    return {
        login,
    };
}

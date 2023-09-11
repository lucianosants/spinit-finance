import { cookies } from 'next/headers';

import { TransactionProps } from '../@types/transactions';
import { api } from '../lib/axios';

export function Api() {
    const token = cookies().get('@auth')?.value;

    const getAllTransactions = async (id: string) => {
        const response = await api.get(`/users/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const { data } = response;

        const transactions = [
            ...data.incomes,
            ...data.expenses,
        ] as TransactionProps[];

        const sortedTransactions = transactions.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);

            return dateB.getTime() - dateA.getTime();
        });

        return sortedTransactions;
    };

    return {
        getAllTransactions,
    };
}

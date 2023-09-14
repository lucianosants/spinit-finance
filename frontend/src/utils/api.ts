import { cookies } from 'next/headers';

import { TransactionProps } from '../@types/transactions';
import { api } from '../lib/axios';
import { UrlPaginationProps } from '../@types/pagination';

export function Api(id: string) {
    const token = cookies().get('@auth')?.value;

    const authHeaders = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const getTransactions = async ({ skip, take }: UrlPaginationProps) => {
        const url = `/users/${id}?take=${take}&skip=${skip}`;

        try {
            const { data } = await api.get(url, authHeaders);

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
        } catch (error) {
            console.log(error);
            return [];
        }
    };

    const getAllTransactions = async () => {
        const urls = {
            incomes: `/incomes/users/${id}`,
            expenses: `/expenses/users/${id}`,
        };

        try {
            const { data: incomes } = await api.get(urls.incomes, authHeaders);

            const { data: expenses } = await api.get(
                urls.expenses,
                authHeaders,
            );

            const transactions = [
                ...incomes,
                ...expenses,
            ] as TransactionProps[];

            return transactions;
        } catch (error) {
            console.log(error);
            return [];
        }
    };

    return {
        getAllTransactions,
        getTransactions,
    };
}

import BigDecimal from 'js-big-decimal';
import { currencyFormatter } from './currency-formatter';

type TransactionProps = {
    id: string;
    description: string;
    amount: number;
    date: string;
    type: 'income' | 'expense';
    payment_method?: 'CASH' | 'CREDIT_CARD';
    installment?: number;
};

export const getTDecimal = (transactions: TransactionProps[]) => {
    const totalIncomes = new BigDecimal(
        transactions
            .filter(({ type }) => type === 'income')
            .reduce((acc, curr) => acc + curr.amount, 0),
    ).round(2);

    const totalExpenses = new BigDecimal(
        transactions
            .filter(({ type }) => type === 'expense')
            .reduce((acc, curr) => acc + curr.amount, 0),
    ).round(2);

    const totalAmount = currencyFormatter(
        totalIncomes.subtract(totalExpenses).getValue(),
    );

    return {
        totalIncomes,
        totalExpenses,
        totalAmount,
    };
};

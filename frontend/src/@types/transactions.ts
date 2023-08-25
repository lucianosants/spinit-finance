export type TransactionProps = {
    id: string;
    description: string;
    amount: number;
    date: string;
    type: 'income' | 'expense';
    payment_method?: 'CASH' | 'CREDIT_CARD';
    installment?: number;
};

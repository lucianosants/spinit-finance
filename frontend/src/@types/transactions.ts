export type PaymentMethodProps = 'CASH' | 'CREDIT_CARD';

export type TransactionTypesProps = 'income' | 'expense';

export type TransactionBaseProps = {
    id: string;
    description: string;
    amount: number;
    date: string;
    installment?: number;
};

export type TransactionProps = {
    type: TransactionTypesProps;
    payment_method?: PaymentMethodProps;
} & TransactionBaseProps;

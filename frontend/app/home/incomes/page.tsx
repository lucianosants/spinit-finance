import { IncomesScreen } from '@/src/screens';
import { getTDecimal } from '@/src/utils/get-decimal';

type TransactionProps = {
    id: string;
    description: string;
    amount: number;
    date: string;
    type: 'income' | 'expense';
    payment_method?: 'CASH' | 'CREDIT_CARD';
    installment?: number;
};

export default function Incomes() {
    const transactions: TransactionProps[] = [
        {
            id: 'joihhauh',
            description: 'Transferência recebida de Luciano',
            amount: 5713.55,
            date: '06/03/2023',
            type: 'income',
        },
        {
            id: 'joisjjfjfauh',
            description: 'Transferência recebida de Tokihara',
            amount: 1589.45,
            date: '07/03/2023',
            type: 'income',
        },
        {
            id: 'akoajkodkao',
            description: 'iPhone 14 Pro Max',
            amount: 6350.2,
            date: '08/03/2023',
            type: 'expense',
            payment_method: 'CREDIT_CARD',
            installment: 5,
        },
        {
            id: 'kkfkfk',
            description: 'Pizza',
            amount: 69.99,
            date: '07/03/2023',
            type: 'expense',
            payment_method: 'CASH',
            installment: 0,
        },
    ];

    const { totalAmount } = getTDecimal(transactions);

    return (
        <IncomesScreen transactions={transactions} totalAmount={totalAmount} />
    );
}

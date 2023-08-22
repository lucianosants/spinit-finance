import { TrendDown } from '@/src/assets/icons';
import { Card, TransactionCard } from '../components';
import { currencyFormatter } from '../utils/currency-formatter';

export function ExpensesScreen() {
    const expenses = [
        {
            id: 'akoajkodkao',
            description: 'iPhone 14 Pro Max',
            amount: 6248,
            date: '08/03/2023',
            type: 'expense',
            payment_method: 'CASH',
            installment: 0,
        },
        {
            id: 'kkfkfk',
            description: 'Pizza',
            amount: 59.99,
            date: '07/03/2023',
            type: 'expense',
            payment_method: 'CREDIT_CARD',
            installment: 2,
        },
        {
            id: 'akhygyegfeug',
            description: 'Parcela do Carro',
            amount: 1248,
            date: '10/03/2023',
            type: 'expense',
            payment_method: 'CASH',
            installment: 0,
        },
    ];

    const transactions = [...expenses];

    const totalAmount = transactions
        .map((transaction) => transaction.amount)
        .reduce((acc, value) => acc + value, 0);

    return (
        <>
            <section className="w-full mt-4">
                <h3 className="mb-4 text-2xl font-bold text-gray-200 text-start">
                    Dashboard - Saídas
                </h3>

                <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="flex-[60%] p-4 bg-primary-100 flex flex-col justify-start sm:justify-center sm:items-center items-start text-neutral-900 rounded-xl">
                        <p className="text-lg font-semibold">Saldo Total</p>
                        <p className="text-4xl font-bold">
                            {currencyFormatter(2400.46)}
                        </p>
                    </div>

                    <div className="flex-[40%] flex flex-col gap-5">
                        <Card.Root url={'expenses#'} variant={'danger'}>
                            <Card.Header
                                icon={
                                    <TrendDown
                                        size={34}
                                        className="p-2 rounded-full bg-danger-200"
                                    />
                                }
                                title={'Saídas'}
                            />
                            <Card.Currency value={totalAmount} />
                        </Card.Root>
                    </div>
                </div>
            </section>

            <section className="flex flex-col mt-6">
                <h3 className="text-xl font-bold text-gray-200 text-start">
                    Transações
                </h3>

                <div className="flex flex-col gap-4 p-4 mt-4 border border-gray-800 rounded-lg">
                    {transactions.map((transaction) => {
                        return (
                            <TransactionCard.Root key={transaction.id}>
                                <TransactionCard.Header>
                                    <TransactionCard.Description>
                                        {transaction.description}
                                    </TransactionCard.Description>
                                    <TransactionCard.PaymentMethod>
                                        {transaction.payment_method === 'CASH'
                                            ? 'À vista'
                                            : 'Cartão de Crédito'}
                                    </TransactionCard.PaymentMethod>

                                    <TransactionCard.Date>
                                        {transaction.date}
                                    </TransactionCard.Date>
                                </TransactionCard.Header>

                                <TransactionCard.Footer>
                                    <TransactionCard.Amount
                                        amount={transaction.amount}
                                        type={'expense'}
                                    />

                                    {transaction.installment > 0 && (
                                        <TransactionCard.Installment>
                                            {transaction.installment}
                                        </TransactionCard.Installment>
                                    )}
                                </TransactionCard.Footer>
                            </TransactionCard.Root>
                        );
                    })}
                </div>
            </section>
        </>
    );
}

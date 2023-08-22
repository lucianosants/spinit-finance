import { TrendUp } from '@/src/assets/icons';
import { Card, TransactionCard } from '../components';
import { currencyFormatter } from '../utils/currency-formatter';

export function IncomesScreen() {
    const incomes = [
        {
            id: 'joihhauh',
            description: 'Transferência recebida de Luciano',
            amount: 10_100,
            date: '06/03/2023',
            type: 'income',
        },
        {
            id: 'joisjjfjfauh',
            description: 'Transferência recebida de Tokihara',
            amount: 1_250,
            date: '07/03/2023',
            type: 'income',
        },
        {
            id: 'ladkalakdkak',
            description: 'Transferência recebida de Kowther',
            amount: 3_250,
            date: '08/03/2023',
            type: 'income',
        },
    ];

    const transactions = [...incomes];

    const totalAmount = transactions
        .map((transaction) => transaction.amount)
        .reduce((acc, value) => acc + value, 0);

    return (
        <>
            <section className="w-full mt-4">
                <h3 className="mb-4 text-2xl font-bold text-gray-200 text-start">
                    Dashboard - Entradas
                </h3>

                <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="flex-[60%] p-4 bg-primary-100 flex flex-col justify-start sm:justify-center sm:items-center items-start text-neutral-900 rounded-xl">
                        <p className="text-lg font-semibold">Saldo Total</p>
                        <p className="text-4xl font-bold">
                            {currencyFormatter(2400.46)}
                        </p>
                    </div>

                    <div className="flex-[40%] flex flex-col gap-5">
                        <Card.Root url={'incomes#'} variant={'success'}>
                            <Card.Header
                                icon={
                                    <TrendUp
                                        size={34}
                                        className="p-2 rounded-full bg-success-200"
                                    />
                                }
                                title={'Entradas'}
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
                            <TransactionCard
                                key={transaction.id}
                                // eslint-disable-next-line
                                type={transaction.type as any}
                                description={transaction.description}
                                date={transaction.date}
                                amount={transaction.amount}
                            />
                        );
                    })}
                </div>
            </section>
        </>
    );
}

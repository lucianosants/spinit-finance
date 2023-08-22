import { VariantsProps } from '../@types/button';
import { HomeDashboardProps } from '../@types/home-dashboard';
import { Card, TransactionCard } from '../components';
import { currencyFormatter } from '../utils/currency-formatter';

export function HomeDashboardScreen({ cards }: HomeDashboardProps) {
    const incomes = [
        {
            id: 'joihhauh',
            description: 'Transferência recebida de Luciano',
            amount: 1248,
            date: '06/03/2023',
            type: 'income',
        },
        {
            id: 'joisjjfjfauh',
            description: 'Transferência recebida de Tokihara',
            amount: 2248,
            date: '07/03/2023',
            type: 'income',
        },
        {
            id: 'ladkalakdkak',
            description: 'Transferência recebida de Kowther',
            amount: 3248,
            date: '08/03/2023',
            type: 'income',
        },
    ];

    const expenses = [
        {
            id: 'akoajkodkao',
            description: 'iPhone 14 Pro Max',
            amount: 6248,
            date: '08/03/2023',
            type: 'expense',
        },
        {
            id: 'kkfkfk',
            description: 'Pizza',
            amount: 59.99,
            date: '07/03/2023',
            type: 'expense',
        },
        {
            id: 'akhygyegfeug',
            description: 'Parcela do Carro',
            amount: 1248,
            date: '10/03/2023',
            type: 'expense',
        },
    ];

    const transactions = [...incomes, ...expenses];

    return (
        <>
            <section className="w-full mt-4">
                <h3 className="mb-4 text-2xl font-bold text-gray-200 text-start">
                    Dashboard
                </h3>
                <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="flex-[60%] p-4 bg-primary-100 flex flex-col justify-start sm:justify-center sm:items-center items-start text-neutral-900 rounded-xl">
                        <p className="text-lg font-semibold">Saldo Total</p>
                        <p className="text-4xl font-bold">
                            {currencyFormatter(1400.46)}
                        </p>
                    </div>

                    <div className="flex-[40%] flex flex-col gap-5">
                        {cards.map((item, index) => (
                            <Card.Root
                                key={index}
                                url={item.url}
                                variant={item.variant as VariantsProps}
                            >
                                <Card.Header
                                    icon={item.icon}
                                    title={item.title}
                                />
                                <Card.Currency value={item.value} />
                            </Card.Root>
                        ))}
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

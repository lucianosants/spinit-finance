import Link from 'next/link';
import BigDecimal from 'js-big-decimal';

import { TrendDown, TrendUp } from '@/src/assets/icons';

import { currencyFormatter } from '../utils/currency-formatter';
import { getTDecimal } from '../utils/get-decimal';

import { VariantsProps } from '../@types/button';
import {
    TransactionProps,
    TransactionTypesProps,
} from '../@types/transactions';
import { Card, TransactionCard } from '../components';

type HomeProps = {
    totalAmount: string;
    transactions: TransactionProps[];
    allTransactions: TransactionProps[];
};

export function HomeDashboardScreen({
    totalAmount,
    transactions,
    allTransactions,
}: HomeProps) {
    const { totalIncomes, totalExpenses } = getTDecimal(allTransactions);

    return (
        <>
            <section className="w-full mt-4">
                <h3 className="mb-4 text-2xl font-bold text-gray-200 text-start">
                    Dashboard
                </h3>
                <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="flex-[60%] p-4 bg-primary-100 flex flex-col justify-start sm:justify-center sm:items-center items-start text-neutral-900 rounded-xl">
                        <p className="text-lg font-semibold">Saldo Total</p>
                        <p
                            className="text-4xl font-bold data-[negative='true']:text-red-700"
                            data-negative={
                                totalAmount.includes('-') ? true : false
                            }
                        >
                            {totalAmount}
                        </p>
                    </div>

                    <div className="flex-[40%] flex flex-col gap-5">
                        <Card.Root
                            url={'incomes'}
                            variant={'success' as VariantsProps}
                        >
                            <Card.Header
                                icon={
                                    <TrendUp
                                        size={34}
                                        className="p-2 rounded-full bg-success-200"
                                    />
                                }
                                title={'Entradas'}
                            />
                            <Card.Currency value={totalIncomes.getValue()} />
                        </Card.Root>

                        <Card.Root
                            url={'expenses'}
                            variant={'danger' as VariantsProps}
                        >
                            <Card.Header
                                icon={
                                    <TrendDown
                                        size={34}
                                        className="p-2 rounded-full bg-danger-200"
                                    />
                                }
                                title={'Saídas'}
                            />
                            <Card.Currency value={totalExpenses.getValue()} />
                        </Card.Root>
                    </div>
                </div>
            </section>

            <section className="flex flex-col mt-6">
                <h3 className="text-xl font-bold text-gray-200 text-start">
                    Transações
                </h3>

                <div className="flex flex-col gap-4 p-4 mt-4 border border-gray-800 rounded-lg">
                    {!transactions.length && (
                        <p className="text-red-300">
                            Não há histórico de transação na sua carteira!
                        </p>
                    )}

                    {transactions.map((transaction) => {
                        const amount = currencyFormatter(
                            new BigDecimal(
                                String(transaction.amount),
                            ).getValue(),
                        );

                        return (
                            <TransactionCard.Root key={transaction.id}>
                                <TransactionCard.Header>
                                    <TransactionCard.Description>
                                        {transaction.description}
                                    </TransactionCard.Description>

                                    <TransactionCard.Date>
                                        {transaction.date}
                                    </TransactionCard.Date>
                                </TransactionCard.Header>

                                <TransactionCard.Footer>
                                    <TransactionCard.Amount
                                        amount={amount}
                                        type={
                                            transaction.type as TransactionTypesProps
                                        }
                                    />

                                    <TransactionCard.Menu {...transaction} />
                                </TransactionCard.Footer>
                            </TransactionCard.Root>
                        );
                    })}
                </div>

                <div className="flex gap-6 pb-12 mt-6">
                    <p className="">
                        Veja mais transações em{' '}
                        <Link
                            className="font-bold text-gray-300 transition-colors duration-200 hover:text-success-100"
                            href="/home/incomes"
                        >
                            Incomes
                        </Link>
                        {' e '}
                        <Link
                            href="/home/expenses"
                            className="font-bold text-gray-300 transition-colors duration-200 hover:text-danger-100"
                        >
                            Expenses
                        </Link>
                        .
                    </p>
                </div>
            </section>
        </>
    );
}

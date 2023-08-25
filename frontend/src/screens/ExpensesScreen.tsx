import BigDecimal from 'js-big-decimal';

import { TrendDown } from '@/src/assets/icons';
import { Card, TransactionCard } from '../components';

import { TransactionProps } from '../@types/transactions';

import { currencyFormatter } from '../utils/currency-formatter';
import { getTDecimal } from '../utils/get-decimal';

type ExpensesProps = {
    transactions: TransactionProps[];
    totalAmount: string;
};

export function ExpensesScreen({ totalAmount, transactions }: ExpensesProps) {
    const { totalExpenses } = getTDecimal(transactions);

    return (
        <>
            <section className="w-full mt-4">
                <h3 className="mb-4 text-2xl font-bold text-gray-200 text-start">
                    Dashboard - Saídas
                </h3>

                <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="flex-[60%] p-4 bg-primary-100 flex flex-col justify-start sm:justify-center sm:items-center items-start text-neutral-900 rounded-xl">
                        <p className="text-lg font-semibold">Saldo Total</p>
                        <p className="text-4xl font-bold">{totalAmount}</p>
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
                    {transactions
                        .filter(({ type }) => type === 'expense')
                        .map((transaction) => {
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
                                        <TransactionCard.PaymentMethod>
                                            {transaction.payment_method ===
                                            'CASH'
                                                ? 'À vista'
                                                : 'Cartão de Crédito'}
                                        </TransactionCard.PaymentMethod>

                                        <TransactionCard.Date>
                                            {transaction.date}
                                        </TransactionCard.Date>
                                    </TransactionCard.Header>

                                    <TransactionCard.Footer>
                                        <TransactionCard.Amount
                                            amount={amount}
                                            type={'expense'}
                                        />

                                        {transaction.installment
                                            ? transaction.installment > 0 && (
                                                  <TransactionCard.Installment>
                                                      {transaction.installment}
                                                  </TransactionCard.Installment>
                                              )
                                            : null}
                                    </TransactionCard.Footer>
                                </TransactionCard.Root>
                            );
                        })}
                </div>
            </section>
        </>
    );
}

import { twMerge } from 'tailwind-merge';
import { currencyFormatter } from '@/src/utils/currency-formatter';

type TransactionCardProps = {
    description: string;
    date: string;
    amount: number;
    type: 'income' | 'expense';
};

const transactionTypes = {
    income: 'text-success-100',
    expense: 'text-danger-100',
};

export function TransactionCard({
    description,
    amount,
    date,
    type,
}: TransactionCardProps) {
    const types = transactionTypes[type];

    return (
        <div className="flex items-center justify-between w-full gap-12 pb-4 border-b border-gray-800 last:pb-0 last:border-none">
            <div className="flex flex-col items-start gap-1">
                <span className="text-sm font-bold text-gray-200 line-clamp-1">
                    {description}
                </span>

                <span className="text-sm">{date}</span>
            </div>

            <span
                className={twMerge('text-sm font-semibold sm:text-base', types)}
            >
                {type === 'income' ? '+' : '-'}
                {currencyFormatter(amount)}
            </span>
        </div>
    );
}

import { twMerge } from 'tailwind-merge';
import { ReactNode } from 'react';
import { Menu } from './Menu';

export { Menu };

type TransactionCardRootProps = {
    children: ReactNode;
};

type TransactionCardHeaderProps = {
    children?: ReactNode;
};

const transactionTypes = {
    income: 'text-success-100',
    expense: 'text-danger-100',
};

type TransactionCardFooterProps = {
    children?: ReactNode;
    type: keyof typeof transactionTypes;
    amount: string;
};

export function Root({ children }: TransactionCardRootProps) {
    return (
        <div className="flex items-center justify-between w-full gap-12 pb-4 border-b border-gray-800 last:pb-0 last:border-none">
            {children}
        </div>
    );
}

export function Header({ children }: TransactionCardHeaderProps) {
    return <div className="flex flex-col items-start gap-1">{children}</div>;
}

export function Description({ children }: { children: ReactNode }) {
    return (
        <span className="text-sm font-bold text-gray-200 line-clamp-1">
            {children}
        </span>
    );
}

export function Date({ children }: { children: ReactNode }) {
    return <span className="text-sm">{children}</span>;
}

export function PaymentMethod({ children }: { children: ReactNode }) {
    return <span className="text-sm text-gray-300">{children}</span>;
}

export function Footer({ children }: { children: ReactNode }) {
    return <div className="flex flex-col items-end">{children}</div>;
}

export function Amount({ type, amount }: TransactionCardFooterProps) {
    const types = transactionTypes[type];

    return (
        <span className={twMerge('text-sm font-semibold sm:text-base', types)}>
            {type === 'income' ? '+' : '-'}
            {amount}
        </span>
    );
}

export function Installment({ children }: { children: ReactNode }) {
    return (
        <span className="text-sm font-semibold text-warning-100 sm:text-base">
            {children}x
        </span>
    );
}

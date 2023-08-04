'use client';

import { usePathname } from 'next/navigation';

import { Button } from '@/src/components';

import { SquaresFour, TrendDown, TrendUp } from '@/src/assets/icons';

const options = [
    {
        label: 'Todas',
        url: '/home',
        icon: <SquaresFour size={24} />,
    },
    {
        label: 'Entradas',
        url: '/home/incomes',
        icon: <TrendUp size={24} />,
    },
    {
        label: 'Saídas',
        url: '/home/expenses',
        icon: <TrendDown size={24} />,
    },
];

export function Navbar() {
    const router = usePathname();

    return (
        <nav className="w-full">
            <ul className="flex flex-row justify-between w-full list-inside md:gap-4 md:justify-start md:flex-col">
                {options.map((option, index) => (
                    <li key={index}>
                        <Button.Navigate
                            width="full"
                            variant="transparent"
                            href={option.url}
                            position="start"
                            icon={option.icon}
                            className="group data-[current='true']:bg-primary-200 data-[current='true']:text-primary-100"
                            data-current={router === option.url}
                        >
                            <span className="sr-only">{option.label}</span>
                            <span className="hidden group-data-[current='true']:inline text-sm md:inline sm:text-md">
                                {option.label}
                            </span>
                        </Button.Navigate>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

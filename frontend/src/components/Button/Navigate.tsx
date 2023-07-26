import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

import { LinkProps } from '@/src/@types/button';

import { colors, widths } from './props';

export function Navigate({
    children,
    variant = 'default',
    className,
    icon,
    width = 'fit',
    ...rest
}: LinkProps) {
    const colorLink = colors[variant];
    const widthLink = widths[width];

    return (
        <Link
            {...rest}
            className={twMerge(
                'px-4 py-2 text-sm flex items-center gap-4 justify-center font-bold rounded-lg border-transparent transition-all duration-300 border-[2px]',
                className,
                colorLink,
                widthLink,
            )}
        >
            {icon} <span>{children}</span>
        </Link>
    );
}

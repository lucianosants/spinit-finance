import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

import { LinkProps } from '@/src/@types/button';

import { colors, widths, positions } from './props';

export function Navigate({
    children,
    variant = 'default',
    className,
    icon,
    width = 'fit',
    position = 'center',
    ...rest
}: LinkProps) {
    const colorLink = colors[variant];
    const widthLink = widths[width];
    const positionLink = positions[position];

    return (
        <Link
            {...rest}
            className={twMerge(
                'px-4 py-2 text-sm flex items-center gap-4 font-bold rounded-lg border-transparent transition-all duration-300 border-[2px]',
                className,
                colorLink,
                widthLink,
                positionLink,
            )}
        >
            {icon} {children}
        </Link>
    );
}

import { twMerge } from 'tailwind-merge';

import { ButtonProps } from '@/src/@types/button';
import { colors, widths } from './props';

export function Action({
    children,
    variant = 'default',
    className,
    icon,
    width = 'fit',
    ...rest
}: ButtonProps) {
    const colorButton = colors[variant];
    const widthButton = widths[width];

    return (
        <button
            {...rest}
            className={twMerge(
                'px-4 py-2 text-sm flex items-center gap-4 justify-center font-bold rounded-lg border-transparent transition-all duration-300 border-[2px]',
                className,
                colorButton,
                widthButton,
            )}
        >
            {icon} <span>{children}</span>
        </button>
    );
}

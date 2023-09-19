'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type DropdownMenuProps = {
    trigger: ReactNode;
    children: ReactNode;
    className?: string;
};

export function Root({ children, trigger, className }: DropdownMenuProps) {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button className={twMerge('hover:text-gray-200', className)}>
                    {trigger}
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className="py-2 font-sans text-gray-200 bg-gray-700 rounded-lg w-fit">
                    {children}

                    <DropdownMenu.Arrow className="fill-gray-700" />
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
}

export function Item({ children }: { children: ReactNode }) {
    return (
        <DropdownMenu.Item className="w-full bg-gray-700 rounded-md shadow-lg hover:outline-none h-fit">
            {children}
        </DropdownMenu.Item>
    );
}

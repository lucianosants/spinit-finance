'use client';

import { Button, Dropdown } from '@/src/components';

import { User, CaretDown } from '@/src/assets/icons';

export function ProfileMenu({ customer }: { customer?: string }) {
    const links = [
        { label: 'Perfil', url: '#' },
        { label: 'Sair', url: '/api/auth/logout' },
    ];

    return (
        <Dropdown.Root
            trigger={
                <div className="flex items-center gap-2">
                    <User size={24} weight="fill" />

                    <span className="hidden sm:inline">{customer}</span>

                    <CaretDown />
                </div>
            }
        >
            <Dropdown.Item>
                <span className="inline px-4 py-1 text-lg font-bold text-gray-300 border-b sm:hidden border-default">
                    {customer}
                </span>
            </Dropdown.Item>

            {links.map((link, index) => (
                <Dropdown.Item key={`${index} - ${link.label}`}>
                    <Button.Navigate
                        width="full"
                        variant="transparent"
                        href={link.url}
                        prefetch={false}
                    >
                        {link.label}
                    </Button.Navigate>
                </Dropdown.Item>
            ))}
        </Dropdown.Root>
    );
}

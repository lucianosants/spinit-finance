'use client';

import { useState } from 'react';
import Cookie from 'js-cookie';

import { Button, Dropdown } from '@/src/components';

import { User, CaretDown } from '@/src/assets/icons';
import { getUser } from '@/src/utils/getUser';

export function ProfileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    const links = [
        { label: 'Perfil', url: '#' },
        { label: 'Sair', url: '/api/auth/logout' },
    ];

    const token = Cookie.get('@auth');
    const user = getUser(token as string);

    return (
        <Dropdown.Root>
            <Dropdown.Trigger onClick={toggleDropdown}>
                <div className="flex items-center gap-2">
                    <User size={24} weight="fill" />
                    <span className="hidden sm:inline">{user?.name}</span>
                    <CaretDown />
                </div>
            </Dropdown.Trigger>

            <Dropdown.Menu position="right" isOpen={isOpen}>
                <Dropdown.Item>
                    <span className="inline px-4 py-1 text-lg font-bold text-gray-300 border-b sm:hidden border-default">
                        {user?.name}
                    </span>
                </Dropdown.Item>

                {links.map((link, index) => (
                    <Dropdown.Item key={`${index} - ${link.label}`}>
                        <Button.Navigate
                            width="full"
                            variant="transparent"
                            href={link.url}
                            prefetch={false}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Button.Navigate>
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown.Root>
    );
}

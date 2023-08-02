'use client';

import { useState } from 'react';
import { Button, Dropdown } from '../../components';

import { User, CaretDown } from '@/src/assets/icons';

type Props = {
    customer: string;
};

export function ProfileMenu({ customer }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    const links = [
        { label: 'Perfil', url: '#' },
        { label: 'Sair', url: '#' },
    ];

    return (
        <Dropdown.Root>
            <Dropdown.Trigger onClick={toggleDropdown}>
                <div className="flex items-center gap-2">
                    <User size={24} weight="fill" />
                    <span className="hidden sm:inline">{customer}</span>
                    <CaretDown />
                </div>
            </Dropdown.Trigger>

            <Dropdown.Menu isOpen={isOpen}>
                {links.map((link, index) => (
                    <Dropdown.Item key={index}>
                        <Button.Navigate
                            width="full"
                            variant="transparent"
                            href={link.url}
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

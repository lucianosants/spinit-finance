'use client';

import { useState } from 'react';

import { Button, Dropdown } from '@/src/components';
import { List, Question, Crown } from '@/src/assets/icons';

export function HeaderMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { title: 'Premium', icon: <Crown size={20} weight="bold" /> },
        { title: 'Ajuda', icon: <Question size={20} weight="bold" /> },
    ];

    return (
        <>
            <Dropdown.Root>
                <div className="md:hidden">
                    <Dropdown.Trigger onClick={() => setIsOpen(!isOpen)}>
                        <List size={24} weight="bold" />
                    </Dropdown.Trigger>
                </div>

                <Dropdown.Menu isOpen={isOpen}>
                    {links.map((link, index) => (
                        <Dropdown.Item key={index}>
                            <Button.Navigate
                                width="full"
                                variant="transparent"
                                href="#"
                                onClick={() => setIsOpen(false)}
                                icon={link.icon}
                                position="start"
                            >
                                {link.title}
                            </Button.Navigate>
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown.Root>
        </>
    );
}

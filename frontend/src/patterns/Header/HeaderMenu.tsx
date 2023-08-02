'use client';

import { useState } from 'react';

import { Button, Dropdown } from '@/src/components';
import { List } from '@/src/assets/icons';

export function HeaderMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const links = ['Premium', 'Ajuda'];

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
                            >
                                {link}
                            </Button.Navigate>
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown.Root>
        </>
    );
}

import { Button } from '@/src/components';
import { List, Question, Crown } from '@/src/assets/icons';

import { Dropdown } from '../../components';

export function HeaderMenu() {
    const links = [
        { title: 'Premium', icon: <Crown size={20} weight="bold" /> },
        { title: 'Ajuda', icon: <Question size={20} weight="bold" /> },
    ];

    return (
        <>
            <Dropdown.Root
                className="block md:hidden"
                trigger={<List size={24} weight="bold" />}
            >
                {links.map((link, index) => (
                    <Dropdown.Item key={index}>
                        <Button.Navigate
                            width="full"
                            variant="transparent"
                            href="#"
                            icon={link.icon}
                            position="start"
                        >
                            {link.title}
                        </Button.Navigate>
                    </Dropdown.Item>
                ))}
            </Dropdown.Root>
        </>
    );
}

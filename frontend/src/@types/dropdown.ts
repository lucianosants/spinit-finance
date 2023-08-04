import { ReactNode } from 'react';

export type DropdownRootProps = {
    children: ReactNode;
};

export type DropdownTriggerProps = {
    onClick: () => void;
    children: ReactNode;
};

export type DropdownMenuProps = {
    children: ReactNode;
    isOpen: boolean;
    position?: 'right' | 'left';
};

export type DropdownItemProps = {
    children: ReactNode;
};

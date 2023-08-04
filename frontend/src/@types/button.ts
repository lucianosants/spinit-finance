import { ButtonHTMLAttributes, ReactNode } from 'react';

import { LinkProps as NextLinkProps } from 'next/link';

export type VariantsProps =
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'primary'
    | 'white'
    | 'default'
    | 'transparent'
    | 'outlined-success'
    | 'outlined-danger'
    | 'outlined-warning'
    | 'outlined-info'
    | 'outlined-primary'
    | 'outlined-default';

type RootProps = {
    variant?: VariantsProps;
    icon?: ReactNode;
    width?: 'full' | 'fit';
};

type LinkBaseProps = {
    children: ReactNode;
    href: string;
    className?: string;
    target?: string;
};

export type ButtonProps = RootProps & ButtonHTMLAttributes<HTMLButtonElement>;

export type LinkProps = LinkBaseProps & RootProps & NextLinkProps;

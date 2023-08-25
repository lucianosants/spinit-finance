import { ReactNode } from 'react';
import { VariantsProps } from './button';

export type RootCardProps = {
    children: ReactNode;
    variant: VariantsProps;
    url: string;
};

export type HeaderCardProps = {
    title: string;
    icon: ReactNode;
};

export type CurrencyCardProps = {
    value: string;
};

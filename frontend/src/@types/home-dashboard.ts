import { ReactNode } from 'react';

export type HomeDashboardCardProps = {
    title: string;
    icon: ReactNode;
    value: number;
    url: string;
    variant: string;
};

export type HomeDashboardProps = {
    cards: HomeDashboardCardProps[];
};

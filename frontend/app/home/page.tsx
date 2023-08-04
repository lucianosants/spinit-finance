import { TrendDown, TrendUp } from '@/src/assets/icons';

import { HomeDashboardScreen } from '@/src/screens';

export default function Homepage() {
    const cards = [
        {
            title: 'Entradas',
            icon: (
                <TrendUp
                    size={34}
                    className="p-2 rounded-full bg-success-200"
                />
            ),
            value: 1450.55,
            url: 'incomes',
            variant: 'success',
        },
        {
            title: 'Saídas',
            icon: (
                <TrendDown
                    size={34}
                    className="p-2 rounded-full bg-danger-200"
                />
            ),
            value: 560.75,
            url: 'expenses',
            variant: 'danger',
        },
    ];

    return <HomeDashboardScreen cards={cards} />;
}

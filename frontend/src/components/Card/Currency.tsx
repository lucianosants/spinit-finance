import { CurrencyCardProps } from '@/src/@types/card';

import { currencyFormatter } from '@/src/utils/currency-formatter';

export function Currency({ value }: CurrencyCardProps) {
    return <p className="flex text-2xl">{currencyFormatter(value)}</p>;
}

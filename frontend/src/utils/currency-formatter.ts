export function currencyFormatter(value: string) {
    const newValue = parseFloat(value);

    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(newValue);
}

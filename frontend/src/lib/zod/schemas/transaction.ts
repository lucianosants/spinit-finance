import { z } from 'zod';

export const transactionSchema = z.object({
    amount: z.number({
        errorMap: () => ({
            message: 'Campo Inválido',
        }),
    }),
    description: z.string().min(1, 'Este campo não pode ficar em branco!'),
    payment_method: z
        .enum(['CREDIT_CARD', 'CASH'], {
            errorMap: () => ({ message: 'Selecione uma opção válida!' }),
        })
        .optional(),
    installment: z
        .number({
            errorMap: () => ({
                message: 'Campo Inválido',
            }),
        })
        .optional(),
    date: z.string().min(8, 'Por favor, defina uma data válida!'),
    user: z
        .object({
            id: z.string(),
        })
        .optional(),
});

export type TransactionProps = z.infer<typeof transactionSchema>;

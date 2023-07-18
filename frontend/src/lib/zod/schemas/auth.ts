import z from 'zod';

export const signupSchema = z
    .object({
        first_name: z.string().min(1, 'Este campo não pode ficar em branco.'),
        last_name: z.string().min(1, 'Este campo não pode ficar em branco.'),
        email: z
            .string()
            .min(1, 'Este campo não pode ficar em branco.')
            .email('O e-mail fornecido é inválido.'),
        username: z.string().min(1, 'Este campo não pode ficar em branco.'),
        password: z
            .string()
            .min(8, 'Sua senha deve ter no mínimo 8 caracteres.')
            .max(18, 'Sua senha deve ter no máximo 18 caracteres.')
            .refine(
                (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).+$/.test(value),
                {
                    message:
                        'Sua senha deve conter pelo menos um caractere minúsculo, um caractere maiúsculo e um caractere especial.',
                },
            ),
        confirmPassword: z
            .string()
            .min(1, 'Este campo não pode ficar em branco.'),
    })
    .refine((fields) => fields.confirmPassword === fields.password, {
        path: ['confirmPassword'],
        message: 'As senhas precisam ser iguais.',
    });

export const loginSchema = z.object({
    email: z
        .string()
        .min(1, 'Este campo não pode ficar em branco.')
        .email('O e-mail fornecido é inválido.'),
    password: z.string().min(1, 'Este campo não pode ficar em branco.'),
});

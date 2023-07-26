'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

import { Form } from '@/src/components';
import { Eye, EyeSlash, SpinnerGap } from '@/src/assets/icons';
import { Button } from '@/src/components';

import { body } from '@/_data/screens/auth/pt-br';
import { loginSchema } from '../lib/zod/schemas/auth';

import { auth } from '../utils/auth';

export type LoginProps = z.infer<typeof loginSchema>;

export function LoginScreen() {
    const [hiddenPassword, setHiddenPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const { handleSubmit, register, formState } = useForm<LoginProps>({
        criteriaMode: 'all',
        mode: 'onChange',
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const { errors, dirtyFields, isSubmitting } = formState;

    const { email, password, submit } = body.form;

    const handleLogin = async (data: LoginProps) => {
        setErrorMessage('');
        try {
            const response = await auth().login(data);

            return response;
        } catch (error) {
            setErrorMessage('E-mail não encontrado ou senha inválida.');
        }
    };

    return (
        <div>
            <div>
                <p className="text-xl font-bold tracking-widest font-alt">
                    {body.titles[1]}
                </p>
            </div>

            <form
                className="flex flex-col items-start w-full gap-5 mt-6"
                autoComplete="off"
                onSubmit={handleSubmit(handleLogin)}
            >
                <Form.Field
                    label={email.label}
                    isValid={dirtyFields.email}
                    error={errors.email?.message}
                >
                    <Form.Input
                        register={register('email')}
                        placeholder={email.placeholder}
                        type="email"
                    />
                </Form.Field>

                <Form.Field
                    label={password.label}
                    error={errors.password?.message}
                    isValid={dirtyFields.password}
                >
                    <Form.Input
                        register={register('password')}
                        placeholder={password.placeholder}
                        type={hiddenPassword ? 'text' : 'password'}
                        style={{ paddingRight: '2.5rem' }}
                    />
                    <Button.Action
                        type="button"
                        variant="transparent"
                        onClick={() => setHiddenPassword(!hiddenPassword)}
                        className="absolute pr-4 mt-0 right-3 top-10"
                    >
                        {hiddenPassword ? (
                            <Eye size={20} />
                        ) : (
                            <EyeSlash size={20} />
                        )}
                    </Button.Action>
                </Form.Field>

                <Button.Action
                    type="submit"
                    width="full"
                    variant="white"
                    className="py-4 disabled:bg-white/80 text-md"
                    disabled={isSubmitting}
                    icon={
                        isSubmitting && (
                            <SpinnerGap
                                className="animate-spin"
                                size={20}
                                weight="bold"
                            />
                        )
                    }
                >
                    {isSubmitting ? 'Entrando...' : submit[0]}
                </Button.Action>
            </form>

            {errorMessage && (
                <div
                    className="p-4 mt-6 font-semibold text-center bg-red-300 rounded-lg cursor-pointer"
                    onClick={() => setErrorMessage('')}
                >
                    <p className="text-black">{errorMessage}</p>
                </div>
            )}

            <div className="mt-6">
                <Button.Navigate href="/auth/signup">
                    {body.links[1]}
                </Button.Navigate>
            </div>
        </div>
    );
}

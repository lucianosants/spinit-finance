'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

import { Form, Spin } from '@/src/components';
import { Eye, EyeSlash } from '@/src/assets/icons';

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
        const response = await auth().login(data);

        if (!response?.data) {
            setErrorMessage('E-mail não encontrado ou senha inválida.');
            return;
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
                    <button
                        type="button"
                        onClick={() => setHiddenPassword(!hiddenPassword)}
                        className="absolute right-0 pr-4 mt-1 top-12"
                    >
                        {hiddenPassword ? (
                            <Eye size={20} />
                        ) : (
                            <EyeSlash size={20} />
                        )}
                    </button>
                </Form.Field>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full p-4 text-lg font-semibold rounded-lg disabled:cursor-wait disabled:bg-neutral-300 hover:bg-neutral-200 bg-neutral-100 text-neutral-900"
                >
                    {isSubmitting ? (
                        <>
                            <Spin /> Entrando...
                        </>
                    ) : (
                        submit[0]
                    )}
                </button>
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
                <Link
                    href="/auth/signup"
                    className="text-sm font-semibold text-violet-300 hover:text-violet-400"
                >
                    {body.links[1]}
                </Link>
            </div>
        </div>
    );
}

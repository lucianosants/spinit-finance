'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { Form } from '@/src/components';
import { Spin } from '@/src/components';
import { Eye, EyeSlash } from '@/src/assets/icons';

import { body } from '@/_data/screens/auth/pt-br';

import { signupSchema } from '../lib/zod/schemas/auth';

type SignupProps = z.infer<typeof signupSchema>;

export function SignupScreen() {
    const [hiddenPassword, setHiddenPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const router = useRouter();

    const {
        first_name,
        last_name,
        email,
        username,
        password,
        confirm_password,
        submit,
    } = body.form;

    const { handleSubmit, register, formState } = useForm<SignupProps>({
        criteriaMode: 'all',
        mode: 'onChange',
        resolver: zodResolver(signupSchema),
        defaultValues: {
            first_name: '',
            last_name: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
        },
    });

    const { errors, dirtyFields, isSubmitting } = formState;

    const handleSignup = async (data: SignupProps) => {
        console.log('data', data);

        try {
            const url = 'http://localhost:3333';
            const response = await fetch(`${url}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.status > 300) {
                const { error } = await response.json();

                setErrorMessage(error);

                return;
            }

            router.replace('/auth/login');

            return response;
            // eslint-disable-next-line
        } catch (error: any) {
            throw new Error(error.message);
        }
    };

    return (
        <div>
            <div className="">
                <p className="text-xl font-bold tracking-widest font-alt">
                    {body.titles[0]}
                </p>
            </div>

            <form
                className="flex flex-col items-start w-full gap-5 mt-6"
                autoComplete="off"
                onSubmit={handleSubmit(handleSignup)}
            >
                <Form.Field
                    label={first_name.label}
                    error={errors.first_name?.message}
                    isValid={dirtyFields.first_name}
                >
                    <Form.Input
                        register={register('first_name')}
                        placeholder={first_name.placeholder}
                        type="text"
                    />
                </Form.Field>

                <Form.Field
                    label={last_name.label}
                    error={errors.last_name?.message}
                    isValid={dirtyFields.last_name}
                >
                    <Form.Input
                        register={register('last_name')}
                        placeholder={last_name.placeholder}
                        type="text"
                    />
                </Form.Field>

                <Form.Field
                    label={email.label}
                    error={errors.email?.message}
                    isValid={dirtyFields.email}
                >
                    <Form.Input
                        register={register('email')}
                        placeholder={email.placeholder}
                        type="email"
                    />
                </Form.Field>

                <Form.Field
                    label={username.label}
                    error={errors.username?.message}
                    isValid={dirtyFields.username}
                >
                    <Form.Input
                        register={register('username')}
                        placeholder={username.placeholder}
                        type="text"
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

                <Form.Field
                    label={confirm_password.label}
                    error={errors.confirmPassword?.message}
                    isValid={dirtyFields.confirmPassword}
                >
                    <Form.Input
                        register={register('confirmPassword')}
                        placeholder={confirm_password.placeholder}
                        type={hiddenPassword ? 'text' : 'password'}
                    />
                </Form.Field>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full p-4 text-lg font-semibold rounded-lg disabled:cursor-wait disabled:bg-neutral-300 hover:bg-neutral-200 bg-neutral-100 text-neutral-900"
                >
                    {isSubmitting ? (
                        <>
                            <Spin /> Criando...
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
                    href="/auth/login"
                    className="text-sm font-semibold text-violet-300 hover:text-violet-400"
                >
                    {body.links[0]}
                </Link>
            </div>
        </div>
    );
}

'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { Form } from '@/src/components';
import { Eye, EyeSlash, SpinnerGap } from '@/src/assets/icons';
import { Button } from '@/src/components';

import { body } from '@/_data/screens/auth/pt-br';

import { signupSchema } from '../lib/zod/schemas/auth';
import { auth, ErrorType } from '../utils/auth';

export type SignupProps = z.infer<typeof signupSchema>;

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
        setErrorMessage('');

        try {
            const response = await auth().signup(data);

            router.push('/auth/login');

            return response;
            //eslint-disable-next-line
        } catch (error: any) {
            const { response } = error as ErrorType;

            setErrorMessage(
                response?.data.error || 'Houve um erro nao criar conta.',
            );

            return;
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
                    {isSubmitting ? 'Criando...' : submit[0]}
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
                <Button.Navigate href="/auth/login">
                    {body.links[0]}
                </Button.Navigate>
            </div>
        </div>
    );
}

'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';

import { Form } from '@/src/components';
import { Eye, EyeSlash } from '@/src/assets/icons';

import { body } from '@/_data/screens/auth/pt-br';

export function LoginScreen() {
    const [hiddenPassword, setHiddenPassword] = useState(false);

    const { email, password, submit } = body.form;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        return alert('hello');
    };

    return (
        <div>
            <div className="">
                <p className="text-xl font-bold tracking-widest font-alt">
                    {body.titles[1]}
                </p>
            </div>

            <form
                className="flex flex-col items-start w-full gap-5 mt-6"
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <Form.Field label={email.label}>
                    <Form.Input placeholder={email.placeholder} type="email" />
                </Form.Field>

                <Form.Field label={password.label}>
                    <Form.Input
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
                    className="w-full p-4 text-lg font-semibold rounded-lg hover:bg-neutral-200 bg-neutral-100 text-neutral-900"
                >
                    {submit[1]}
                </button>
            </form>

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

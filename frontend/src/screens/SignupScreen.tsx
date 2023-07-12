'use client';

import { FormEvent, useState } from 'react';

import { Form } from '@/src/components';
import { Eye, EyeSlash } from '@/src/assets/icons';

import { body } from '@/_data/screens/auth/pt-br';

export function SignupScreen() {
    const [hiddenPassword, setHiddenPassword] = useState(false);

    const {
        first_name,
        last_name,
        email,
        username,
        password,
        confirm_password,
        submit,
    } = body.form;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        return alert('hello');
    };

    return (
        <div>
            <div className="">
                <p className="text-xl font-bold tracking-widest font-alt">
                    {body.title}
                </p>
            </div>

            <form
                className="flex flex-col items-start w-full gap-5 mt-6"
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <Form.Field label={first_name.label}>
                    <Form.Input
                        placeholder={first_name.placeholder}
                        type="text"
                    />
                </Form.Field>

                <Form.Field label={last_name.label}>
                    <Form.Input
                        placeholder={last_name.placeholder}
                        type="text"
                    />
                </Form.Field>

                <Form.Field label={email.label}>
                    <Form.Input placeholder={email.placeholder} type="email" />
                </Form.Field>

                <Form.Field label={username.label}>
                    <Form.Input
                        placeholder={username.placeholder}
                        type="text"
                    />
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

                <Form.Field label={confirm_password.label}>
                    <Form.Input
                        placeholder={confirm_password.placeholder}
                        type={hiddenPassword ? 'text' : 'password'}
                        style={{ paddingRight: '2.5rem' }}
                    />
                </Form.Field>

                <button
                    type="submit"
                    className="w-full p-4 text-lg font-semibold rounded-lg hover:bg-neutral-200 bg-neutral-100 text-neutral-900"
                >
                    {submit}
                </button>
            </form>
        </div>
    );
}

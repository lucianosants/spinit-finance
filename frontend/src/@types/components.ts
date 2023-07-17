import { InputHTMLAttributes, ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export type FieldProps = {
    children: ReactNode;
    label: string;
    error: string | undefined;
    isValid?: boolean;
};

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    register: UseFormRegisterReturn;
};

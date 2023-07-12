import { InputHTMLAttributes, ReactNode } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export type InputPasswordProps = { children: ReactNode; label: string };

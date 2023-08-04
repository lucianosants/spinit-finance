import { InputProps } from '@/src/@types/forms';

export function Input({ register, ...props }: InputProps) {
    return (
        <input
            {...register}
            {...props}
            className={`w-full group-data-[valid="true"]:border-emerald-300 p-4 bg-transparent rounded-lg appearance-none form-input group-data-[error="true"]:border-red-400`}
        />
    );
}

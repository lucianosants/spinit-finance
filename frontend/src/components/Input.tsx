import { FieldProps, InputProps } from '../@types/components';

export function Field({ children, label, error, isValid }: FieldProps) {
    return (
        <label
            className={`relative group flex flex-col items-start w-full gap-2`}
            data-error={!!error}
            data-valid={isValid}
        >
            <span aria-label={label} className="font-medium">
                {label}{' '}
            </span>
            <span aria-label={label} className="sr-only">
                {label}:
            </span>

            {children}

            {error?.length && (
                <span className="text-sm font-medium text-red-300">
                    {error}
                </span>
            )}
        </label>
    );
}

export function Input({ register, ...props }: InputProps) {
    return (
        <input
            {...register}
            {...props}
            className={`w-full group-data-[valid="true"]:border-emerald-300 p-4 bg-transparent rounded-lg appearance-none form-input group-data-[error="true"]:border-red-400`}
        />
    );
}

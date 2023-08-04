import { FieldProps } from '@/src/@types/forms';

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

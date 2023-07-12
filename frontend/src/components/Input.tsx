import { InputPasswordProps, InputProps } from '../@types/components';

export function Field({ children, label }: InputPasswordProps) {
    return (
        <label className="relative flex flex-col items-start w-full gap-2">
            <span aria-label={label} className="font-medium">
                {label}:
            </span>
            {children}
        </label>
    );
}

export function Input({ ...props }: InputProps) {
    return (
        <input
            {...props}
            className="w-full p-4 bg-transparent rounded-lg appearance-none form-input"
        />
    );
}

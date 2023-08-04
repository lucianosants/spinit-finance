import { FormRootProps } from '@/src/@types/forms';

export function Root({ onSubmit, children }: FormRootProps) {
    return (
        <form
            className="flex flex-col items-start w-full gap-5 mt-6"
            autoComplete="off"
            onSubmit={onSubmit}
        >
            {children}
        </form>
    );
}

import { twMerge } from 'tailwind-merge';

export function Skeleton({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={twMerge(
                'animate-pulse rounded-xl bg-gray-100/20',
                className,
            )}
            {...props}
        />
    );
}

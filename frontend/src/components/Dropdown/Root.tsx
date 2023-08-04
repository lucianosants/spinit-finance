import { DropdownRootProps } from '@/src/@types/dropdown';

export function Root({ children }: DropdownRootProps) {
    return <div className="relative inline-block text-left">{children}</div>;
}

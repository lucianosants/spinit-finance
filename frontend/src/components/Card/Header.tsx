import { HeaderCardProps } from '@/src/@types/card';

export function Header({ title, icon }: HeaderCardProps) {
    return (
        <div className="flex justify-between w-full">
            <span>{title}</span>
            {icon}
        </div>
    );
}

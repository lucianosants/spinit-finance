import { twMerge } from 'tailwind-merge';
import { DropdownMenuProps } from '@/src/@types/dropdown';

const positions = {
    left: 'left-0',
    right: 'right-0',
};

export function Menu({
    children,
    isOpen,
    position = 'left',
}: DropdownMenuProps) {
    const menuPosition = positions[position];

    return (
        <div
            className={twMerge(
                `${
                    isOpen ? 'block' : 'hidden'
                } origin-top-right absolute mt-2 h-fit rounded-md shadow-lg w-fit bg-gray-700 ring-1 ring-black ring-opacity-5`,
                menuPosition,
            )}
        >
            <div
                className="flex flex-col w-full py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
            >
                {children}
            </div>
        </div>
    );
}

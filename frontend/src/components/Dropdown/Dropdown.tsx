import { ReactNode } from 'react';
import { Button } from '..';

type DropdownProps = {
    children: ReactNode;
    isOpen: boolean;
};

type DropdownTriggerProps = {
    onClick: () => void;
    children: ReactNode;
};

export function Root({ children }: { children: ReactNode }) {
    return <div className="relative inline-block text-left">{children}</div>;
}

export function Trigger({ children, onClick }: DropdownTriggerProps) {
    return (
        <Button.Action type="button" variant="transparent" onClick={onClick}>
            {children}
        </Button.Action>
    );
}

export function Menu({ children, isOpen }: DropdownProps) {
    return (
        <div
            className={`${
                isOpen ? 'block' : 'hidden'
            } origin-top-right absolute right-0 mt-2 rounded-md shadow-lg w-fit  bg-neutral-700/60 ring-1 ring-black ring-opacity-5`}
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

export function Item({ children }: { children: ReactNode }) {
    return <>{children}</>;
}

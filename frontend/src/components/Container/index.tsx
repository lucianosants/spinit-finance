import { ReactNode } from 'react';

type ContainerProps = {
    children: ReactNode;
};

export function Container({ children }: ContainerProps) {
    return (
        <main className="flex flex-col items-center justify-between h-full max-w-6xl gap-8 mx-auto sm:p-6 text-start sm:text-center">
            {children}
        </main>
    );
}

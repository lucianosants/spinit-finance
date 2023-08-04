import { Button } from '..';

import { RootCardProps } from '@/src/@types/card';

export function Root({ children, url, variant }: RootCardProps) {
    return (
        <div className="flex">
            <Button.Navigate
                variant={variant}
                width="full"
                href={`/home/${url}`}
                className="flex-col items-start"
            >
                {children}
            </Button.Navigate>
        </div>
    );
}

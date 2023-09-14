'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Button } from '..';
import { CaretLeft, CaretRight } from '../../assets/icons';
import { PaginationProps } from '@/src/@types/pagination';

export function Pagination({ hasPrevPage, hasNextPage }: PaginationProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const page = searchParams.get('page') ?? '0';

    return (
        <div className="flex gap-6 pb-12 mt-6">
            <Button.Action
                onClick={() => {
                    router.push(
                        page === '1'
                            ? pathname
                            : `${pathname}/?page=${Number(page) - 1}`,
                    );
                }}
                variant={hasPrevPage ? 'outlined-default' : 'transparent'}
                disabled={!hasPrevPage}
                icon={<CaretLeft weight="bold" size={20} />}
                title="Anterior"
            >
                <span className="sr-only">Anterior</span>
            </Button.Action>

            <Button.Action
                onClick={() => {
                    router.push(`${pathname}/?page=${Number(page) + 1}`);
                }}
                variant={hasNextPage ? 'outlined-default' : 'transparent'}
                disabled={!hasNextPage}
                icon={<CaretRight weight="bold" size={20} />}
                title="Próximo"
            >
                <span className="sr-only">Próximo</span>
            </Button.Action>
        </div>
    );
}

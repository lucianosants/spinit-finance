import { Skeleton } from '@/src/components';

export function TransactionsPage() {
    return (
        <div className="overflow-hidden">
            <section className="relative w-full mt-4">
                <Skeleton className="w-10/12 h-10 mb-4 md:w-1/2" />

                <div className="flex flex-col gap-4 sm:flex-row">
                    <Skeleton className="w-full h-20 md:w-1/2" />

                    <Skeleton className="w-full h-20 md:w-1/2" />
                </div>
            </section>

            <section className="flex flex-col mt-6">
                <div className="flex justify-between">
                    <Skeleton className="w-40 h-11" />
                    <Skeleton className="w-11 h-11" />
                </div>

                <div className="flex flex-col gap-4 mt-4">
                    <Skeleton className="w-full h-20" />
                    <Skeleton className="w-full h-20" />
                </div>
            </section>
        </div>
    );
}

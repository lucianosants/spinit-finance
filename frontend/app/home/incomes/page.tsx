import { ParamsProps } from '@/src/@types/pagination';
import { Pagination } from '@/src/components';
import { IncomesScreen } from '@/src/screens';
import { Api } from '@/src/utils/api';
import { getTDecimal } from '@/src/utils/get-decimal';
import { getUser } from '@/src/utils/getUser';

export default async function Incomes({ searchParams }: ParamsProps) {
    const itemsPerPage = 10;
    const currentPage = searchParams.page ?? '0';
    const skip = Number(currentPage) * itemsPerPage;

    const { id } = getUser();

    const transactions = await Api(id).getTransactions({
        take: itemsPerPage,
        skip,
    });
    const allTransactions = await Api(id).getAllTransactions();

    const totalIncomeTransactions = allTransactions.filter(
        ({ type }) => type === 'income',
    ).length;

    const currentIncomeTransactions = transactions.filter(
        ({ type }) => type === 'income',
    ).length;

    const hasNextPage =
        skip + currentIncomeTransactions < totalIncomeTransactions;

    const { totalAmount } = getTDecimal(allTransactions);

    return (
        <>
            <IncomesScreen
                transactions={transactions}
                totalAmount={totalAmount}
                allTransactions={allTransactions}
            />
            <Pagination
                hasPrevPage={Number(currentPage) > 0}
                hasNextPage={hasNextPage}
            />
        </>
    );
}

import { ParamsProps } from '@/src/@types/pagination';
import { Pagination } from '@/src/components';
import { ExpensesScreen } from '@/src/screens';
import { Api } from '@/src/utils/api';
import { getTDecimal } from '@/src/utils/get-decimal';
import { getUser } from '@/src/utils/getUser';

export default async function Expenses({ searchParams }: ParamsProps) {
    const itemsPerPage = 10;
    const currentPage = searchParams.page ?? '0';
    const skip = Number(currentPage) * itemsPerPage;

    const { id } = getUser();

    const transactions = await Api(id).getTransactions({
        take: itemsPerPage,
        skip,
    });
    const allTransactions = await Api(id).getAllTransactions();

    const totalExpenseTransactions = allTransactions.filter(
        ({ type }) => type === 'expense',
    ).length;

    const currentExpenseTransactions = transactions.filter(
        ({ type }) => type === 'expense',
    ).length;

    const hasNextPage =
        skip + currentExpenseTransactions < totalExpenseTransactions;

    const { totalAmount } = getTDecimal(allTransactions);

    return (
        <>
            <ExpensesScreen
                totalAmount={totalAmount}
                transactions={transactions}
                allTransactions={allTransactions}
            />

            <Pagination
                hasPrevPage={Number(currentPage) > 0}
                hasNextPage={hasNextPage}
            />
        </>
    );
}

import { ExpensesScreen } from '@/src/screens';
import { Api } from '@/src/utils/api';
import { getTDecimal } from '@/src/utils/get-decimal';
import { getUser } from '@/src/utils/getUser';

export default async function Expenses() {
    const { id } = getUser();

    const transactions = await Api().getAllTransactions(id);

    const { totalAmount } = getTDecimal(transactions);

    return (
        <ExpensesScreen totalAmount={totalAmount} transactions={transactions} />
    );
}

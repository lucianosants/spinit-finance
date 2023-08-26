import { IncomesScreen } from '@/src/screens';
import { getTDecimal } from '@/src/utils/get-decimal';
import { getUser } from '@/src/utils/getUser';
import { Api } from '@/src/utils/api';

export default async function Incomes() {
    const { id } = getUser();
    const transactions = await Api().getAllTransactions(id);

    const { totalAmount } = getTDecimal(transactions);

    return (
        <IncomesScreen transactions={transactions} totalAmount={totalAmount} />
    );
}

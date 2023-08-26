import { HomeDashboardScreen } from '@/src/screens';
import { Api } from '@/src/utils/api';
import { getTDecimal } from '@/src/utils/get-decimal';
import { getUser } from '@/src/utils/getUser';

export default async function Homepage() {
    const { id } = getUser();

    const transactions = await Api().getAllTransactions(id);

    const { totalAmount } = getTDecimal(transactions);

    return (
        <HomeDashboardScreen
            totalAmount={totalAmount}
            transactions={transactions}
        />
    );
}

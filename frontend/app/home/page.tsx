import { HomeDashboardScreen } from '@/src/screens';
import { Api } from '@/src/utils/api';
import { getTDecimal } from '@/src/utils/get-decimal';
import { getUser } from '@/src/utils/getUser';

export default async function Homepage() {
    const { id } = getUser();

    const transactions = await Api(id).getTransactions({
        take: 10,
        skip: 0,
    });
    const allTransactions = await Api(id).getAllTransactions();

    const { totalAmount } = getTDecimal(allTransactions);

    return (
        <>
            <HomeDashboardScreen
                totalAmount={totalAmount}
                transactions={transactions}
                allTransactions={allTransactions}
            />
        </>
    );
}

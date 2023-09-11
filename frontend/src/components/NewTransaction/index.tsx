'use client';

import { TransactionProps } from '@/src/lib/zod/schemas/transaction';
import { Button } from '..';
import { NewTransaction as Modal } from '../Modal/NewTransaction';
import { Plus } from '@/src/assets/icons';
import { TransactionTypesProps } from '@/src/@types/transactions';
import { api } from '@/src/lib/axios';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

type Props = {
    userId: string;
    type: TransactionTypesProps;
};

export function NewTransaction({ userId, type }: Props) {
    const router = useRouter();

    const handleEdit = async (data: TransactionProps) => {
        const token = Cookies.get('@auth');

        const url = `/${type.concat('s')}`;
        const authHeaders = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        if (type === 'income') {
            await api.post(url, data, authHeaders);

            router.refresh();
            return;
        }

        await api.post(url, data, authHeaders);
        router.refresh();
    };

    return (
        <Modal type={type} userId={userId} handleEdit={handleEdit}>
            <div className="relative group">
                <span className="absolute top-0 right-0 invisible w-40 p-2 -mt-12 text-gray-100 bg-gray-700 rounded-lg shadow group-hover:visible">
                    Nova transação
                </span>
                <Button.Action
                    className="p-2"
                    variant="primary"
                    icon={<Plus size={24} />}
                    aria-label="Nova transação"
                />
            </div>
        </Modal>
    );
}

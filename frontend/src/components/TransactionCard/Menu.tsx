'use client';

import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

import { api } from '@/src/lib/axios';
import { Modal } from '../Modal';
import { RemoveDialog } from '../Modal/AlertDialog';
import { ExpensesProps } from '@/src/lib/zod/schemas/transaction';
import { TransactionProps } from '@/src/@types/transactions';

export function Menu({ ...props }: TransactionProps) {
    const router = useRouter();
    const token = Cookies.get('@auth');

    const type = props.type.concat('s');
    const url = `/${type}/${props.id}`;

    const authHeaders = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const handleEdit = async (data: ExpensesProps) => {
        await api.patch(url, data, authHeaders);
        router.refresh();
    };

    const handleDelete = async () => {
        await api.delete(url, authHeaders);
        router.refresh();
    };

    return (
        <div className="flex items-center gap-2 mt-1">
            <Modal handleEdit={handleEdit} {...props} />
            <RemoveDialog handleDelete={handleDelete} {...props} />
        </div>
    );
}

'use client';

import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

import { api } from '@/src/lib/axios';
import { Edit, RemoveDialog } from '../Modal';
import { TransactionProps as TransactionPropsSchema } from '@/src/lib/zod/schemas/transaction';
import { TransactionProps } from '@/src/@types/transactions';
import { Button } from '..';
import { PencilSimple } from '@/src/assets/icons';

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

    const handleEdit = async (data: TransactionPropsSchema) => {
        await api.patch(url, data, authHeaders);
        router.refresh();
    };

    const handleDelete = async () => {
        await api.delete(url, authHeaders);
        router.refresh();
    };

    return (
        <div className="flex items-center gap-2 mt-1">
            <Edit handleEdit={handleEdit} {...props}>
                <Button.Action
                    variant="outlined-info"
                    className="p-2"
                    aria-label="Editar"
                    title="Editar"
                >
                    <PencilSimple weight="bold" />
                </Button.Action>
            </Edit>
            <RemoveDialog handleDelete={handleDelete} {...props} />
        </div>
    );
}

'use client';

import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

import { api } from '@/src/lib/axios';
import { Edit, RemoveDialog } from '../Modal';
import { TransactionProps as TransactionPropsSchema } from '@/src/lib/zod/schemas/transaction';
import { TransactionProps } from '@/src/@types/transactions';
import { Button, Tooltip } from '..';
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
                    variant="info"
                    className="p-0"
                    aria-label="Editar"
                >
                    <Tooltip content="Editar transação">
                        <PencilSimple
                            weight="bold"
                            size={27}
                            className="p-[5px]"
                        />
                    </Tooltip>
                </Button.Action>
            </Edit>
            <RemoveDialog handleDelete={handleDelete} {...props} />
        </div>
    );
}

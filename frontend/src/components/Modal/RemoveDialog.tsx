import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { TrashSimple } from '../../assets/icons';
import { Button, Tooltip } from '..';

type Props = {
    id: string;
    description: string;
    handleDelete: (id: string) => void;
};

export const RemoveDialog = ({ id, description, handleDelete }: Props) => (
    <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
            <Button.Action variant="danger" className="p-0" aria-label="Editar">
                <Tooltip content="Remover transação">
                    <TrashSimple weight="bold" className="p-[5px]" size={28} />
                </Tooltip>
            </Button.Action>
        </AlertDialog.Trigger>

        <AlertDialog.Portal>
            <AlertDialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 bg-gray-950/80 backdrop-blur-lg" />

            <AlertDialog.Content className="fixed overflow-y-auto top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-gray-900 p-[25px] font-sans border border-default">
                <AlertDialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                    Deseja remover esta transação?
                </AlertDialog.Title>

                <AlertDialog.Description className="text-mauve11 mt-4 mb-5 text-[15px] leading-normal">
                    <span className="font-bold text-primary-100">
                        {`${description} `}
                    </span>
                    será permanentemente removida.
                </AlertDialog.Description>

                <div className="flex justify-end gap-[25px]">
                    <AlertDialog.Cancel asChild>
                        <Button.Action variant="outlined-warning">
                            Cancelar
                        </Button.Action>
                    </AlertDialog.Cancel>

                    <AlertDialog.Action asChild>
                        <Button.Action
                            variant="danger"
                            onClick={() => handleDelete(id)}
                        >
                            Remover
                        </Button.Action>
                    </AlertDialog.Action>
                </div>
            </AlertDialog.Content>
        </AlertDialog.Portal>
    </AlertDialog.Root>
);

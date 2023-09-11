'use client';

import './styles.css';

import { ReactNode, useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Form } from '..';
import { SpinnerGap, X } from '../../assets/icons';

import {
    TransactionProps,
    transactionSchema,
} from '@/src/lib/zod/schemas/transaction';

import {
    PaymentMethodProps,
    TransactionBaseProps,
} from '@/src/@types/transactions';

type Props = TransactionBaseProps & {
    handleEdit: (data: TransactionProps) => void;
    payment_method?: PaymentMethodProps;
    children: ReactNode;
};

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

export function Edit(props: Props) {
    const {
        amount,
        date,
        description,
        installment,
        payment_method,
        handleEdit,
        children,
    } = props;

    const [open, setOpen] = useState(false);

    const {
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        register,
        watch,
        setValue,
    } = useForm<TransactionProps>({
        mode: 'onBlur',
        resolver: zodResolver(transactionSchema),
        defaultValues: {
            amount,
            description,
            payment_method,
            installment,
            date,
        },
    });

    const paymentMethod = watch('payment_method');

    useEffect(() => {
        if (paymentMethod === 'CASH') {
            setValue('installment', 0);
        }

        if (isSubmitSuccessful) {
            wait().then(() => setOpen(false));
        }
    }, [isSubmitSuccessful, paymentMethod, setValue]);

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>{children}</Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 bg-gray-950/80 backdrop-blur-lg" />

                <Dialog.Content className="fixed overflow-y-auto top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-gray-900 p-[25px] font-sans border border-default">
                    <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                        Editar transação
                    </Dialog.Title>
                    <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                        Alterar informações dessa transação.
                    </Dialog.Description>

                    <div>
                        <Form.Root onSubmit={handleSubmit(handleEdit)}>
                            <Form.Field
                                label="Valor"
                                error={errors.amount?.message}
                            >
                                <Form.Input
                                    register={register('amount', {
                                        valueAsNumber: true,
                                    })}
                                    type="number"
                                    step="any"
                                />
                            </Form.Field>

                            <Form.Field
                                label="Descrição"
                                error={errors.description?.message}
                            >
                                <Form.Input
                                    register={register('description')}
                                    type="text"
                                />
                            </Form.Field>

                            {payment_method && (
                                <Form.Field
                                    label="Forma de pagamento"
                                    error={errors.payment_method?.message}
                                >
                                    <select
                                        {...register('payment_method')}
                                        className="w-full py-2 bg-gray-900 rounded-lg appearance-none"
                                    >
                                        <option value="CASH">
                                            Pagamento à vista
                                        </option>
                                        <option value="CREDIT_CARD">
                                            Cartão de crédito
                                        </option>
                                    </select>
                                </Form.Field>
                            )}

                            {installment && paymentMethod === 'CREDIT_CARD' ? (
                                <Form.Field
                                    label="Parcelas"
                                    error={errors.installment?.message}
                                >
                                    <Form.Input
                                        register={register('installment', {
                                            valueAsNumber: true,
                                        })}
                                        type="number"
                                    />
                                </Form.Field>
                            ) : null}

                            <Form.Field
                                label="Data"
                                error={errors.date?.message}
                            >
                                <Form.Input
                                    register={register('date')}
                                    type="date"
                                />
                            </Form.Field>

                            <div className="mt-[25px] flex self-end">
                                <Button.Action
                                    variant="success"
                                    type="submit"
                                    icon={
                                        isSubmitting && (
                                            <SpinnerGap
                                                className="animate-spin"
                                                size={20}
                                                weight="bold"
                                            />
                                        )
                                    }
                                    disabled={isSubmitting}
                                    className="disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting
                                        ? 'Enviando...'
                                        : 'Salvar Alterações'}
                                </Button.Action>
                            </div>
                        </Form.Root>
                    </div>

                    <Dialog.Close asChild>
                        <Button.Action
                            className="absolute top-[10px] right-[10px] p-2"
                            variant="transparent"
                            aria-label="Close"
                        >
                            <X weight="bold" />
                        </Button.Action>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

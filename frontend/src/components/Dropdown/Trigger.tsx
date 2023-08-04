import { Button } from '..';
import { DropdownTriggerProps } from '@/src/@types/dropdown';

export function Trigger({ children, onClick }: DropdownTriggerProps) {
    return (
        <Button.Action type="button" variant="transparent" onClick={onClick}>
            {children}
        </Button.Action>
    );
}

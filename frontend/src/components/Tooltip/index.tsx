'use client';

import {
    Provider,
    Root,
    Trigger,
    Portal,
    Content,
    Arrow,
} from '@radix-ui/react-tooltip';

type Props = {
    children: React.ReactNode;
    content: string;
};

export function Tooltip({ children, content }: Props) {
    return (
        <Provider delayDuration={300}>
            <Root>
                <Trigger asChild>{children}</Trigger>

                <Portal>
                    <Content
                        className="p-3 font-sans text-gray-200 bg-gray-700 rounded-lg shadow shadow-default"
                        sideOffset={5}
                    >
                        {content}
                        <Arrow className="fill-gray-700" />
                    </Content>
                </Portal>
            </Root>
        </Provider>
    );
}

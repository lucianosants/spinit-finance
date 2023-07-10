import { montserrat, oswald } from '@/src/lib/fonts';
import './globals.css';

import { header } from '@/_data/screens/home/pt-br';

export const metadata = {
    title: header.title,
    description: header.description,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <body className={`${oswald.variable} ${montserrat.variable}`}>
                {children}
            </body>
        </html>
    );
}

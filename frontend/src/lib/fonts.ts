import { Oswald, Montserrat } from 'next/font/google';

const oswald = Oswald({
    subsets: ['latin'],
    variable: '--font-oswald',
    display: 'swap',
    fallback: ['arial', 'system-ui'],
});
const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
    fallback: ['arial', 'sans-serif'],
});

export { oswald, montserrat };

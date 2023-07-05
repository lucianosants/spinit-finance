/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/screens/**/*.{js,ts,jsx,tsx,mdx}',
        './src/patterns/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: 'var(--font-montserrat)',
                alt: 'var(--font-oswald)',
            },
        },
    },
    plugins: [],
};

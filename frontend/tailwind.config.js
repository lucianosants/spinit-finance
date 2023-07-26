/** @type {import('tailwindcss').Config} */

// const {  } = require('./src/theme/default');

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
            colors: require('./src/theme/default'),
        },
    },
    plugins: [require('@tailwindcss/forms')],
};

import { colors as defaultColors } from 'tailwindcss/defaultTheme';

export default {
    ...defaultColors,
    success: {
        100: 'rgba(57, 229, 140, 1)',
        200: 'rgba(29, 220, 111, 0.24)',
    },
    danger: {
        100: 'rgba(224, 67, 55, 1)',
        200: 'rgba(213, 43, 32, 0.24)',
    },
    warning: {
        100: 'rgba(255 , 142, 59, 1)',
        200: 'rgba(155, 122, 43, 0.24)',
    },
    info: {
        100: 'rgba(44, 220, 230, 1)',
        200: 'rgba(13, 207, 220, 0.24)',
    },
    primary: {
        100: 'rgba(206, 61, 243, 1)',
        200: 'rgba(192, 41, 240, 0.24)',
    },
    default: 'rgba(168, 179, 207, 0.12)',
};

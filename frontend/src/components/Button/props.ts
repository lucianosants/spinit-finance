const outlined = {
    'outlined-success':
        'text-success-100 border-[2px] border-success-200 hover:bg-success-200',
    'outlined-danger':
        'text-danger-100 border-[2px] border-danger-200 hover:bg-danger-200',

    'outlined-warning':
        'text-warning-100 border-[2px] border-warning-200 hover:bg-warning-200',
    'outlined-info':
        'text-info-100 border-[2px] border-info-200 hover:bg-info-200',

    'outlined-primary':
        'text-primary-100 border-[2px] border-primary-200 hover:bg-primary-200',
    'outlined-default':
        'text-white border-[2px] border-default hover:bg-default',
};

const baseColors = {
    success: 'text-success-100 bg-success-200 hover:bg-green-400/30',
    danger: 'text-danger-100 bg-danger-200 hover:bg-red-500/30',
    warning: 'text-warning-100 bg-warning-200 hover:bg-yellow-500/20',
    info: 'text-info-100 bg-info-200 hover:bg-sky-400/20',
    primary: 'text-primary-100 bg-primary-200 hover:bg-fuchsia-400/[25%]',
    transparent: 'text-neutral-300 hover:text-white hover:bg-default',
    default: 'text-white bg-default hover:bg-neutral-400/20',
    white: 'text-black bg-white hover:bg-white/70',
    ...outlined,
};

const colors = { ...outlined, ...baseColors };

const widths = {
    full: 'w-full',
    fit: 'w-fit',
};

export { colors, widths };

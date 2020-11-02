const extendConfig = require('@funda/tailwind-config').extendConfig;

module.exports = extendConfig({
    theme: {
        extend: {
            height: {
                11: '2.75rem',
            },
            keyframes: {
                'fd-fade-right': {
                    '0%': {
                        opacity: 0,
                        transform: 'translateX(100%)',
                    },
                    '50%': {
                        opacity: 1,
                    },
                    '100%': {
                        transform: 'translateX(0)',
                    },
                },
            },
            animation: {
                'fade-right-enter-active': 'fd-fade-right 0.6s 1 ease-out',
                'fade-right-leave-active':
                    'fd-fade-right 0.6s 1 ease-out reverse',
            },
        },
    },
    variants: {
        opacity: ['group-hover'],
    },
});

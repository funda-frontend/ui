/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 ** Funda: https://github.com/funda-frontend/tailwind-config/blob/master/index.js (what you are extending from)
 */

module.exports = {
    presets: [require('@funda/tailwind-config')],
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
            borderWidth: {
                '3': '3px',
            },
            inset: {
                '1/2': '50%',
            },
            left: {
                '1/2': '50%',
            },
            maxWidth: {
                '1/3': '33%',
                '2/3': '66%',
            },
            flex: {
                '1/3': '33%',
                '2/3': '66%',
            },
            translate: {
                '-1/2': '-50%',
            },
        },
    },
    variants: {
        opacity: ['group-hover'],
        outline: ['active, focus'],
    },
};

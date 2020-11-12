const extendConfig = require('@funda/tailwind-config').extendConfig;

const radio_empty_SVG =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjQiIGZpbGw9IiNjMWRiZTYiLz4KPC9zdmc+Cg==';
const radio_checked_SVG =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjQiIGZpbGw9IiMwMDUxN2YiLz4KPC9zdmc+Cg==';
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
            backgroundImage: () => ({
                'radio-button': 'url(' + radio_empty_SVG + ')',
                'radio-button-checked': 'url(' + radio_checked_SVG + ')',
            }),
        },
    },
    variants: {
        opacity: ['group-hover'],
        outline: ['active, focus'],
    },
});

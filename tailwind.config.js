const extendConfig = require('@funda/tailwind-config').extendConfig;

module.exports = extendConfig({
    theme: {
        extend: {
            height: {
                11: '2.75rem',
            },
        },
    },
    variants: {
        opacity: ['group-hover'],
    },
});

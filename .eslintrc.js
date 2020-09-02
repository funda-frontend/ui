module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended',
        'prettier/vue',
        'plugin:prettier/recommended',
    ],
    rules: {
        quotes: ['warn', 'single', { avoidEscape: true }],
        'no-console': ['warn'],
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2020,
    },
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true,
    },
};

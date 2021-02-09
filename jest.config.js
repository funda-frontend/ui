module.exports = {
    moduleNameMapper: {
        '^vue$': 'vue/dist/vue.min.js',
        '@/(.*)$': '<rootDir>/src/$1',
    },
    moduleFileExtensions: ['js', 'vue', 'json'],
    transform: {
        '^.+\\.js$': 'babel-jest',
        '.*\\.(vue)$': 'vue-jest',
    },
    transformIgnorePatterns: ['/node_modules/(?!@babel/runtime|@funda/icons)'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    snapshotSerializers: ['jest-serializer-vue'],
    watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname',
    ],
};

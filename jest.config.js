module.exports = {
    moduleFileExtensions: ['js', 'vue', 'json'],
    transform: {
        '^.+\\.js$': 'babel-jest',
        '.*\\.(vue)$': 'vue-jest'
    },
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.vue'],
    transformIgnorePatterns: ["/node_modules/(?!@babel/runtime)"],
    coverageReporters: ["text-summary", "html", "lcov", "clover"]
}

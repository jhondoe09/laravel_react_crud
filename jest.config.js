module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    testMatch: [
        '**/src/**/*.{test,spec}.js?(x)', // Matches any file with .test.js, .spec.js, .test.jsx, or .spec.jsx in the src directory
    ],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'], // Optional: ignore certain directories
};

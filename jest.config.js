module.exports = {
    testEnvironment: 'node', // or 'jsdom' for browser-like testing
    verbose: true, // Display detailed information for each test
    collectCoverage: false, // Enable test coverage information
    coverageDirectory: './coverage', // Directory where coverage reports will be saved
    testPathIgnorePatterns: ['/node_modules/'], // Paths to ignore during testing
    // Add other configurations as needed
};

module.exports = {
  verbose: true,
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '/config/',
    '/node_modules/',
    '/seeders/',
    '/models/',
    '/routes/',
    '/queries/',
    '/vendor/',
    '/migrations/',
    '/schemas/',
    '/coverage/',
    '/__fixtures__/',
    '/__testTables__/',
    '__helpers__',
    '/.vs/',
    '/.vscode/',
    '/.serverless/',
  ],
  globals: {},
  collectCoverage: false,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/jest.config.js',
    '!**/config.js',
    '!**/server.js',
    '!**/serverless.js',
    '!**/index.js',
    '!**/config/**',
    '!**/node_modules/**',
    '!**/seeders/**',
    '!**/models/**',
    '!**/routes/**',
    '!**/queries/**',
    '!**/vendor/**',
    '!**/migrations/**',
    '!**/schemas/**',
    '!**/coverage/**',
    '!**/.vs/**',
    '!**/.vscode/**',
    '!**/.serverless/**',
  ],
  coverageReporters: ['text', 'text-summary'],
}

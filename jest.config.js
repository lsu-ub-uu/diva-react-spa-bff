/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  setupFiles: ['dotenv/config'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
  testPathIgnorePatterns: ['./node_modules/', './lists/', './dist/'],
  collectCoverage: false,
  collectCoverageFrom: ['./src/**'],
  coveragePathIgnorePatterns: ['./src/index.tsx'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  clearMocks: true
};

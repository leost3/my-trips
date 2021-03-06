module.exports = {
  // environment for test - browser
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/','/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/jest/setup.ts']
}
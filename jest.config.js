const { defaults } = require('jest-config');

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/*.js', 'src/**/*.js'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'feature'],
  moduleNameMapper: { '^uuid$': 'uuid' },
  resetMocks: true,
  resetModules: true,
  testEnvironment: 'node',
  testMatch: [...defaults.testMatch, '**/*_steps.js'],
  testPathIgnorePatterns: ['config/test.js'],
  verbose: true,
};

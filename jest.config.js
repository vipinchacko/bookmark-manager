'use strict';

const config = {
  setupFiles: [
    '<rootDir>/devUtils/jest/configMock.js',
    '<rootDir>/devUtils/jest/jwtMock.js',
  ],
  verbose: true,
  clearMocks: true,
  resetMocks: true,
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'text'],
  collectCoverageFrom: ['src/**/*.js'],
};

module.exports = config;

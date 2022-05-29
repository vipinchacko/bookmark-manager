/* eslint-disable no-useless-escape */

'use strict';

const config = {
  setupFiles: [
    '<rootDir>/devUtils/jest/configMock.js',
    '<rootDir>/devUtils/jest/jwtMock.js',
  ],
  verbose: true,
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.js', '!src/server.js'],
  clearMocks: true,
};

module.exports = config;

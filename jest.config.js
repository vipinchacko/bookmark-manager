'use strict';

const config = {
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

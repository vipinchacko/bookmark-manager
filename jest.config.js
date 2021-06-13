'use strict';

const config = {
  verbose: true,
  timers: 'modern',
  clearMocks: true,
  resetMocks: true,
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js}'],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov'],
};

module.exports = config;

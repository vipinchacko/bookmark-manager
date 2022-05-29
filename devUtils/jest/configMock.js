'use strict';

const {
  mockJwtExpiry,
  mockJwtSecret,
  mockDbUrl,
  mockDbName,
} = require('./mockConstants');

jest.mock('../../src/config', () => ({
  LOG_LEVEL: 'silent',
  JWT_EXPIRY: mockJwtExpiry,
  JWT_SECRET: mockJwtSecret,
  DB_URL: mockDbUrl,
  DB_NAME: mockDbName,
}));

'use strict';

const { mockJwtExpiry, mockJwtSecret, mockDbUrl } = require('./mockConstants');

jest.mock('../../src/config', () => ({
  LOG_LEVEL: 'silent',
  JWT_EXPIRY: mockJwtExpiry,
  JWT_SECRET: mockJwtSecret,
  DB_URL: mockDbUrl,
}));

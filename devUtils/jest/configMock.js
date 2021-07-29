'use strict';

const { mockJwtExpiry, mockJwtSecret } = require('./mockConstants');

jest.mock('../../src/config', () => ({
  LOG_LEVEL: 'silent',
  JWT_EXPIRY: mockJwtExpiry,
  JWT_SECRET: mockJwtSecret,
}));

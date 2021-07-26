'use strict';

const { mockJwtExpiry, mockJwtSecret } = require('./mockConstants');

jest.mock('../../src/config', () => ({
  JWT_EXPIRY: mockJwtExpiry,
  JWT_SECRET: mockJwtSecret,
}));

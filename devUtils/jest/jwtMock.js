'use strict';

const { mockJwtToken } = require('./mockConstants');

jest.mock('../../src/lib/jwt', () => ({
  createToken: () => mockJwtToken,
}));

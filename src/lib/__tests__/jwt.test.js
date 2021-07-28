'use strict';

const util = require('util');
const jwt = require('jsonwebtoken');
const { createToken } = require('../jwt');
const {
  mockJwtSecret,
  mockJwtExpiry,
} = require('../../../devUtils/jest/mockConstants');

jest.mock('util', () => {
  return { promisify: jest.fn(fn => fn) };
});

jest.mock('jsonwebtoken', () => {
  return { sign: jest.fn(() => Promise.resolve('JWTTOKEN')) };
});

jest.unmock('../jwt');

describe('jwt', () => {
  describe('Create token', () => {
    it('should return a jwt token corresponding to a payload', async () => {
      var payload = { id: '123' };
      const mockToken = 'JWTTOKEN';

      util.promisify.mockImplementation(fn => fn);
      jwt.sign.mockImplementation(() => Promise.resolve(mockToken));

      const token = await createToken(payload);

      expect(jwt.sign).toHaveBeenCalledWith(payload, mockJwtSecret, {
        expiresIn: mockJwtExpiry,
      });
      expect(token).toBe(mockToken);
    });
  });
});

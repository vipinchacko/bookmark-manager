'use strict';

const util = require('util');
const jwt = require('jsonwebtoken');
const { createToken } = require('../jwt');

jest.mock('util', () => {
  return { promisify: jest.fn(fn => fn) };
});

jest.mock('jsonwebtoken', () => {
  return { sign: jest.fn(() => Promise.resolve('JWTTOKEN')) };
});

const JWT_SECRET = 'SECRET';
const JWT_EXPIRY = '1000';

jest.mock('../../config', () => ({
  JWT_EXPIRY,
  JWT_SECRET,
}));

describe('jwt', () => {
  describe('Create token', () => {
    it('should return a jwt token corresponding to a payload', async () => {
      var payload = { id: '123' };
      const mockToken = 'JWTTOKEN';

      util.promisify.mockImplementation(fn => fn);
      jwt.sign.mockImplementation(() => Promise.resolve(mockToken));

      const token = await createToken(payload);

      expect(jwt.sign).toHaveBeenCalledWith(payload, JWT_SECRET, {
        expiresIn: JWT_EXPIRY,
      });
      expect(token).toBe(mockToken);
    });
  });
});

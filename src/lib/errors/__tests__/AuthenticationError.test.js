'use strict';

const {
  AuthenticationError,
} = require('../userFacingErrors/AuthenticationError');

describe('Authentication error class', () => {
  describe('when an error object is created', () => {
    test('should have statusCode as 401', () => {
      var err = new AuthenticationError(
        'Field should have length 5',
        'INVALID_REQUEST_BODY',
        {},
      );

      expect(err.statusCode).toBe(401);
    });
  });
});

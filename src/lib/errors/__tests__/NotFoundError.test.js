'use strict';

const { NotFoundError } = require('../userFacingErrors/NotFoundError');

describe('Not found error class', () => {
  describe('when an error object is created', () => {
    test('should have statusCode as 404', () => {
      var err = new NotFoundError(
        'Field should have length 5',
        'INVALID_REQUEST_BODY',
        {},
      );

      expect(err.statusCode).toBe(404);
    });
  });
});

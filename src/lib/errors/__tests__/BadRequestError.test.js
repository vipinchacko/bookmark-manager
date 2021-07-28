'use strict';

const { BadRequestError } = require('../userFacingErrors/BadRequestError');

describe('Bad request error class', () => {
  describe('when an error object is created', () => {
    test('should have statusCode as 400', () => {
      var invalidFields = [
        { code: 'VALIDATION_ERROR', message: 'Field should have length 5' },
      ];
      var err = new BadRequestError(
        'Field should have length 5',
        'VALIDATION_ERROR',
        {},
        invalidFields,
      );

      expect(err.statusCode).toBe(400);
    });
  });
});

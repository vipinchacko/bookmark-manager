/* eslint-disable no-new */

'use strict';

const { AssertionError } = require('assert');

const { UserFacingError } = require('../userFacingErrors/UserFacingError');

describe('User facing error class', () => {
  describe('when error message passed to constructor is not a string', () => {
    it('throws error', () => {
      expect(() => {
        new UserFacingError(null, 400, 'INVALID_REQUEST_BODY', {});
      }).toThrow(AssertionError);
    });
  });

  describe('when code passed to constructor is not a string', () => {
    it('throws error', () => {
      expect(() => {
        new UserFacingError('Field should have length 5', 400, null, {});
      }).toThrow(AssertionError);
    });
  });

  describe('when an error object is created', () => {
    test('should be marked as an operational error', () => {
      var err = new UserFacingError(
        'Field should have length 5',
        400,
        'INVALID_REQUEST_BODY',
        {},
      );

      expect(err.isOperational).toBe(true);
    });
  });
});

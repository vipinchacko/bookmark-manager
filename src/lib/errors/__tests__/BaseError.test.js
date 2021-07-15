/* eslint-disable no-new */

'use strict';

const { AssertionError } = require('assert');

const { ApplicationError } = require('../BaseError');

describe('Base error class', () => {
  describe('when status passed to constructor is not a number', () => {
    it('throws error', () => {
      expect(() => {
        new ApplicationError('Field should have length 5', '400', {});
      }).toThrow(AssertionError);
    });
  });

  describe('when options passed to constructor is not a non-null object', () => {
    it('throws error', () => {
      expect(() => {
        new ApplicationError('Field should have length 5', 400, null);
      }).toThrow(AssertionError);
    });
  });

  describe('when an error object is created', () => {
    test('should have the right statusCode', () => {
      var err = new ApplicationError('Field should have length 5', 401, {});

      expect(err.statusCode).toBe(401);
    });

    test('should have the right message', () => {
      var err = new ApplicationError('Field should have length 5', 400, {});

      expect(err.message).toBe('Field should have length 5');
    });

    test('should have the right additional properties', () => {
      var err = new ApplicationError('Field should have length 5', 400, {
        userName: 'John',
        userId: '1241',
      });

      expect(err.userName).toBe('John');
      expect(err.userId).toBe('1241');
    });
  });
});

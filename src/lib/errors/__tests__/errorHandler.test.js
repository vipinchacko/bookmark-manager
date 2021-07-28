'use strict';

const {
  usernameNotPresent,
} = require('../../../components/users/__mocks/errors');

const { errorHandler } = require('../errorHandler');
const { BadRequestError } = require('../userFacingErrors/BadRequestError');

const mockResponse = () => {
  var res = {};

  /** methods return the response object itself to allow methods to be chained */
  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  res.sendStatus = jest.fn().mockReturnValue(res);

  return res;
};

describe('error handler', () => {
  var res;
  // TODO: might need a better mock for request later
  var req = {};

  beforeEach(() => {
    res = mockResponse();
  });

  describe('when error is a user facing error', () => {
    it('responds with an error with the right status code and body', () => {
      var err = new BadRequestError('User exists', 'USER_EXISTS', {});
      errorHandler(err, req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({
        errors: [{ code: 'USER_EXISTS', message: 'User exists' }],
      });
    });
  });

  describe('when error is not a user facing error', () => {
    it('responds with an error with status code 500', () => {
      var err = new Error();
      errorHandler(err, req, res);

      expect(res.sendStatus).toHaveBeenCalledWith(500);
    });
  });

  describe('when error is not a custom validation error', () => {
    describe('when error is a mongoose validation error', () => {
      it('responds with an error with status code 400', () => {
        errorHandler(usernameNotPresent, req, res);

        expect(res.status).toHaveBeenCalledWith(400);
      });
      it('responds with an error with the right body', () => {
        errorHandler(usernameNotPresent, req, res);

        expect(res.send).toHaveBeenCalledWith({
          errors: [
            { code: 'VALIDATION_ERROR', message: 'username is required' },
          ],
        });
      });
    });
  });
});

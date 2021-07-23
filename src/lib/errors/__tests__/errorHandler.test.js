'use strict';

const { errorHandler } = require('../errorHandler');
const { BadRequestError } = require('../userFacingErrors/BadRequestError');

const mockResponse = () => {
  var res = {};

  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  res.sendStatus = jest.fn().mockReturnValue(res);

  return res;
};

describe('error handler', () => {
  var res = mockResponse();
  beforeEach(() => {
    res = mockResponse();
  });

  describe('when error is a user facing error', () => {
    it('responds with an error with the right status code and body', () => {
      var err = new BadRequestError('User exists', 'USER_EXISTS', {});
      errorHandler(err, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({
        errors: [{ code: 'USER_EXISTS', message: 'User exists' }],
      });
    });
  });

  describe('when error is not a user facing error', () => {
    it('responds with an error with status code 500', () => {
      var err = new Error();
      errorHandler(err, res);

      expect(res.sendStatus).toHaveBeenCalledWith(500);
    });
  });
});

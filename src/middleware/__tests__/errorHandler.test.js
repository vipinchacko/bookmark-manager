'use strict';

const { errorHandler } = require('../errorHandler');
const { errorHandler: handler } = require('../../lib/errors/errorHandler');

jest.mock('../../lib/errors/errorHandler');

describe('errorHandler', () => {
  describe('when response headers are already sent', () => {
    let res;
    let err;
    let req;
    let next;
    beforeEach(() => {
      res = { headersSent: true };
      err = new Error();
      req = {};
      next = jest.fn();
    });

    it('passes the error to default error handler', () => {
      errorHandler(err, req, res, next);

      expect(next).toHaveBeenCalledWith(err);
    });

    it('does not call the custom error handler', () => {
      errorHandler(err, req, res, next);

      expect(handler).not.toHaveBeenCalled();
    });
  });

  describe('when response headers are not already sent', () => {
    it('calls the custom error handler', () => {
      var res = { headersSent: false };
      var err = new Error();
      var req = {};
      var next = jest.fn();
      errorHandler(err, req, res, next);

      expect(handler).toHaveBeenCalledWith(err, req, res);
    });
  });
});

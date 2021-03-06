'use strict';

const { errorHandler: handler } = require('../lib/errors/errorHandler');

function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  return handler(err, req, res);
}

module.exports.errorHandler = errorHandler;

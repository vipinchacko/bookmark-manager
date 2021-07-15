'use strict';

const { UserFacingError } = require('./UserFacingError');

class BadRequestError extends UserFacingError {
  constructor(message, code, options) {
    super(message, 400, code, options);
  }
}

module.exports.BadRequestError = BadRequestError;

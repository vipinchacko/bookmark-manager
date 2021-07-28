'use strict';

const { UserFacingError } = require('./UserFacingError');

class BadRequestError extends UserFacingError {
  constructor(message, code, options, invalidFields) {
    super(message, 400, code, options);
    this.invalidFields = invalidFields || [];
  }
}

module.exports.BadRequestError = BadRequestError;

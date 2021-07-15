'use strict';

const { UserFacingError } = require('./UserFacingError');

class NotFoundError extends UserFacingError {
  constructor(message, code, options) {
    super(message, 404, code, options);
  }
}

module.exports.NotFoundError = NotFoundError;

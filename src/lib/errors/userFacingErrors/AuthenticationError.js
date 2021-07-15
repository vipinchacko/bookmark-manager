'use strict';

const { UserFacingError } = require('./UserFacingError');

class AuthenticationError extends UserFacingError {
  constructor(message, code, options) {
    super(message, 401, code, options);
  }
}

module.exports.AuthenticationError = AuthenticationError;

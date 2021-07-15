'use strict';

const assert = require('assert').strict;

const { ApplicationError } = require('../BaseError');

class UserFacingError extends ApplicationError {
  constructor(message, statusCode, code, options) {
    super(message, statusCode, options);

    this.code = code;
    this.isOperational = true;

    assert(typeof message === 'string');
    assert(typeof code === 'string');
  }
}

module.exports.UserFacingError = UserFacingError;

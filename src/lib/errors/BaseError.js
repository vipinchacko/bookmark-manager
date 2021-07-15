'use strict';

const assert = require('assert').strict;

class ApplicationError extends Error {
  constructor(message, statusCode, options) {
    super(message);

    this.name = this.constructor.name;
    this.statusCode = statusCode;

    assert(typeof options === 'object');
    assert(typeof statusCode === 'number');
    assert(options !== null);

    Object.entries(options).forEach(([key, value]) => {
      this[key] = value;
    });
  }
}

module.exports.ApplicationError = ApplicationError;

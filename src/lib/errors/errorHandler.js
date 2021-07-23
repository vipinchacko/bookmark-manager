'use strict';

const { UserFacingError } = require('./userFacingErrors/UserFacingError');

function sendResponse(err, res) {
  /** TODO: check if logic needs to be added to see whether response has already been sent or not */

  if (err instanceof UserFacingError) {
    return res
      .status(err.statusCode)
      .send({ errors: [{ code: err.code, message: err.message }] });
  }

  return res.sendStatus(500);
}

function errorHandler(err, res) {
  // TODO: replace with better logger
  console.error(err);
  sendResponse(err, res);
}

module.exports.errorHandler = errorHandler;

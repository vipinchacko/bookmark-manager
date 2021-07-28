'use strict';

const mongoose = require('mongoose');

const { errorCodes } = require('./errorConstants');
const { BadRequestError } = require('./userFacingErrors/BadRequestError');
const { UserFacingError } = require('./userFacingErrors/UserFacingError');

function responseBody(err) {
  const { invalidFields } = err;

  if (invalidFields && invalidFields.length) {
    return {
      errors: invalidFields.map(field => ({
        code: field.code,
        message: field.message,
      })),
    };
  }
  return { errors: [{ code: err.code, message: err.message }] };
}

function sendResponse(err, res) {
  if (err instanceof UserFacingError) {
    return res.status(err.statusCode).send(responseBody(err));
  }

  return res.sendStatus(500);
}

function mongooseInvalidFields(err) {
  const { errors } = err;
  const errorFields = Object.keys(errors);
  return errorFields.map(field => ({
    field,
    message: `${errors[field].path} is ${errors[field].kind}`,
    code: errorCodes.VALIDATION_ERROR,
  }));
}

function badRequestError(err) {
  const invalidFields =
    err instanceof mongoose.Error.ValidationError
      ? mongooseInvalidFields(err)
      : [];

  return new BadRequestError(
    'Validation Error',
    errorCodes.VALIDATION_ERROR,
    {
      stack: err.stack,
    },
    invalidFields,
  );
}

function notCustomBadRequestError(err) {
  return !(err instanceof BadRequestError);
}

function isSchemaValidationError(err) {
  return err.name === 'ValidationError';
}

function errorHandler(err, req, res) {
  const decoratedError =
    notCustomBadRequestError(err) && isSchemaValidationError(err)
      ? badRequestError(err)
      : err;

  // TODO: replace with better logger
  console.error(decoratedError);

  sendResponse(decoratedError, res);
}

module.exports.errorHandler = errorHandler;

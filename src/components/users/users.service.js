'use strict';

const { errorCodes } = require('../../lib/errors/errorConstants');
const {
  BadRequestError,
} = require('../../lib/errors/userFacingErrors/BadRequestError');
const { hashPassword } = require('../../lib/hashPassword');
const { createToken } = require('../../lib/jwt');
const { getUserByEmail, addUser } = require('./users.repository');

async function register(username, email, password) {
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    throw new BadRequestError(
      'User already exists',
      errorCodes.USER_ALREADY_EXISTS,
      {
        user: { username, email },
      },
    );
  }

  const hashedPassword = await hashPassword(password);

  const newUser = await addUser(username, email, hashedPassword);

  const jwt = await createToken(newUser);

  return { token: jwt };
}

module.exports.register = register;

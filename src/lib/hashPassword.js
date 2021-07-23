'use strict';

const { genSalt, hash } = require('bcrypt');

async function hashPassword(password) {
  const salt = await genSalt(10);
  const hashedPassword = await hash(password, salt);

  return hashedPassword;
}

module.exports.hashPassword = hashPassword;

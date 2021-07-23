'use strict';

const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const { JWT_SECRET, JWT_EXPIRY } = require('../config');

const sign = promisify(jwt.sign);

async function createToken(payload) {
  const token = await sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRY });
  return token;
}

module.exports = { createToken };

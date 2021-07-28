'use strict';

const { register: registerService } = require('./users.service');

async function register(req) {
  const { username, email, password } = req.body;
  // validate request body here
  return registerService(username, email, password);
}

module.exports.register = register;

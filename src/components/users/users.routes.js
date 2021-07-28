'use strict';

const express = require('express');

const { register: registerHandler } = require('./users.handler');

const router = express.Router();

router.route('/').post(async function register(req, res, next) {
  try {
    const user = await registerHandler(req);
    res.send(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

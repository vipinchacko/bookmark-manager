'use strict';

const pino = require('pino-http');

const { LOG_LEVEL } = require('../config');

const logger = pino({
  prettyPrint: true,
  level: LOG_LEVEL || 'info',
});

module.exports.logger = logger;

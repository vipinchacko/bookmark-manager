'use strict';

const express = require('express');
const cors = require('cors');

const { logger } = require('./lib/logger');
const { errorHandler } = require('./middleware/errorHandler');

const healthCheckRoutes = require('./components/health-check/healthCheck.routes');
const userRoutes = require('./components/users/users.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(logger);

app.use('/api/v1/health-check', healthCheckRoutes);
app.use('/api/v1/users', userRoutes);

app.use(errorHandler);

module.exports = app;

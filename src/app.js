'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const healthCheckRoutes = require('./components/health-check/healthCheck.routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/health-check', healthCheckRoutes);

module.exports = app;

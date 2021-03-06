'use strict';

const mongoose = require('mongoose');

const { DB_URL } = require('../config');

async function connectToDb() {
  try {
    await mongoose.connect(DB_URL, { useNewUrlParser: true });
    // TODO: Use a better logger
    console.log('Connected to db');
  } catch (err) {
    // TODO: Use a better logger
    console.error('Could not connect to db', err);

    // TODO: Unhandled promise rejection, need to handle
    throw err;
  }
}
module.exports.connectToDb = connectToDb;

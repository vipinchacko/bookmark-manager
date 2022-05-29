'use strict';

const { MongoClient } = require('mongodb');

const { DB_URL, DB_NAME } = require('../config');

async function dbClient(req, res, next) {
  const client = new MongoClient(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log('Connected to db');

    const db = client.db(DB_NAME);

    req.db = db;

    next();
  } catch (err) {
    console.error('Could not connect to db', err);
    throw err;
  } finally {
    await client.close();
  }
}

module.exports.dbClient = dbClient;

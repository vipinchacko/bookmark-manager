'use strict';

const { Schema, model } = require('mongoose');

const { collections } = require('./collections');

var userFields = {
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  createdAt: { type: String, default: Date.now() },
};

const userSchema = Schema(userFields);

module.exports.User = model('User', userSchema, collections.USERS);
module.exports.userFields = userFields;

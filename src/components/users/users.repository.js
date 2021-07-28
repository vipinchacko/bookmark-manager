'use strict';

const { User } = require('../../models/User');

async function getUserByEmail(email) {
  return User.findOne({ email });
}

async function addUser(username, email, password) {
  const newUser = new User({ username, email, password });
  await newUser.save();
  return { id: newUser.id };
}

module.exports = {
  getUserByEmail,
  addUser,
};

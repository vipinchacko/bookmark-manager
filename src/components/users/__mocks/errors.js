'use strict';

const mongoose = require('mongoose');

let usernameNotPresent = new mongoose.Error.ValidationError();
usernameNotPresent = Object.assign(usernameNotPresent, {
  _message: 'User validation failed',
  message: 'User validation failed: username: Path `username` is required.',
  errors: {
    username: {
      kind: 'required',
      message: 'Path `username` is required.',
      path: 'username',
    },
  },
});

let emailNotPresent = new mongoose.Error.ValidationError();
emailNotPresent = Object.assign(emailNotPresent, {
  _message: 'User validation failed',
  message: 'User validation failed: email: Path `email` is required',
  errors: {
    email: {
      kind: 'required',
      message: 'Path `email` is requried',
      path: 'email',
    },
  },
});

module.exports = { usernameNotPresent, emailNotPresent };

'use strict';

jest.spyOn(Date, 'now').mockImplementation(() => 1627294734719);

const { userFields } = require('../User');

describe('User Model', () => {
  it('has attributes username, email, password and createdAt', () => {
    Date.now = jest.fn(() => 1627294734719);
    const expectedFields = {
      username: { type: String, required: true },
      email: { type: String, unique: true, required: true },
      password: { type: String, required: true },
      createdAt: { type: String, default: Date.now() },
    };

    expect(userFields).toEqual(expectedFields);
  });
});

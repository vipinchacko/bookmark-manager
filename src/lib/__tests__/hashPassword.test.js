'use strict';

const bcrypt = require('bcrypt');
const { hashPassword } = require('../hashPassword');

jest.mock('bcrypt');

describe('hashPassword', () => {
  it('returns hashed password', async () => {
    var salt = { salt: 10 };
    const password = 'PASSWORD';

    bcrypt.genSalt.mockImplementation(() => Promise.resolve(salt));
    bcrypt.hash.mockImplementation(() => Promise.resolve('#HASHEDPASSWORD#'));

    const hashedPassword = await hashPassword(password);

    expect(bcrypt.genSalt).toBeCalledWith(10);
    expect(bcrypt.hash).toBeCalledWith(password, salt);
    expect(hashedPassword).toBe('#HASHEDPASSWORD#');
  });
});

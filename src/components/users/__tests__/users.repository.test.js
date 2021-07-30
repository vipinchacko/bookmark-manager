'use strict';

const { getUserByEmail, addUser } = require('../users.repository');
const { User } = require('../../../models/User');

jest.mock('../../../models/User');

describe('Users repository', () => {
  describe('getUserByEmail', () => {
    it('calls findOne method on User model passing an object with email as key', async () => {
      User.findOne.mockImplementation(jest.fn());

      const email = 'john@testmail.com';

      await getUserByEmail(email);

      expect(User.findOne).toHaveBeenCalledWith({ email });
    });
  });

  describe('addUser', () => {
    it('should create a new object of the User model and save to db', async () => {
      var username = 'John';
      var email = 'john@testmail.com';
      var password = 'password';

      User.mockImplementation(() => {
        var user = {
          save: () => {
            user.id = '123';
          },
        };
        return user;
      });

      const newUser = await addUser(username, email, password);

      expect(User).toHaveBeenCalledTimes(1);
      expect(newUser).toEqual({ id: '123' });
    });
  });
});

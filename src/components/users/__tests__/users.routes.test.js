'use strict';

const request = require('supertest');
const { mockJwtToken } = require('../../../../devUtils/jest/mockConstants');

const app = require('../../../app');
const { getUserByEmail, addUser } = require('../users.repository');
const { usernameNotPresent, emailNotPresent } = require('../__mocks/errors');

jest.mock('../users.repository');

describe('User routes', () => {
  const baseUrl = '/api/v1/users';

  describe('POST /users', () => {
    describe('when username, password and new email is provided in request body', () => {
      const newUser = {
        username: 'John',
        email: 'john@testmail.com',
        password: 'password@123',
      };

      beforeEach(() => {
        getUserByEmail.mockImplementation(() => undefined);
        addUser.mockImplementation(() => ({ id: '123' }));
      });

      it('responds with status code 200', done => {
        request(app)
          .post(baseUrl)
          .send(newUser)
          .then(res => {
            expect(res.statusCode).toBe(200);
            done();
          });
      });

      it('returns a jwt token', done => {
        request(app)
          .post(baseUrl)
          .send(newUser)
          .then(res => {
            expect(res.body).toEqual({
              token: mockJwtToken,
            });
            done();
          });
      });
    });

    describe('when a user with the given email already exists', () => {
      const existingUser = {
        username: 'John',
        email: 'john@testmail.com',
        password: 'password@123',
      };

      beforeEach(() => {
        getUserByEmail.mockImplementation(() => existingUser);
        addUser.mockImplementation(() => ({ id: '123' }));
      });

      it('responds with status code 400', done => {
        request(app)
          .post(baseUrl)
          .send(existingUser)
          .then(res => {
            expect(res.statusCode).toBe(400);
            done();
          });
      });

      it('returns the right error response', done => {
        request(app)
          .post(baseUrl)
          .send(existingUser)
          .then(res => {
            expect(res.body).toEqual({
              errors: [
                { code: 'USER_ALREADY_EXISTS', message: 'User already exists' },
              ],
            });
            done();
          });
      });
    });

    describe('when username is not passed in request body', () => {
      const newUser = {
        email: 'john@testmail.com',
        password: 'password@123',
      };

      beforeEach(() => {
        getUserByEmail.mockImplementation(() => undefined);
        addUser.mockImplementation(() => {
          throw usernameNotPresent;
        });
      });

      it('responds with status code 400', done => {
        request(app)
          .post(baseUrl)
          .send(newUser)
          .then(res => {
            expect(res.statusCode).toBe(400);
            done();
          });
      });

      it('returns the right error response', done => {
        request(app)
          .post(baseUrl)
          .send(newUser)
          .then(res => {
            expect(res.body).toEqual({
              errors: [
                { code: 'VALIDATION_ERROR', message: 'username is required' },
              ],
            });
            done();
          });
      });
    });

    describe('when email is not passed in request body', () => {
      const newUser = {
        username: 'John',
        password: 'password@123',
      };

      beforeEach(() => {
        getUserByEmail.mockImplementation(() => undefined);
        addUser.mockImplementation(() => {
          throw emailNotPresent;
        });
      });

      it('responds with status code 400', done => {
        request(app)
          .post(baseUrl)
          .send(newUser)
          .then(res => {
            expect(res.statusCode).toBe(400);
            done();
          });
      });

      it('returns the right error response', done => {
        request(app)
          .post(baseUrl)
          .send(newUser)
          .then(res => {
            expect(res.body).toEqual({
              errors: [
                { code: 'VALIDATION_ERROR', message: 'email is required' },
              ],
            });
            done();
          });
      });
    });
  });
});

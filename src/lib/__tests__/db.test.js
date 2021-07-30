'use strict';

const mongoose = require('mongoose');
const { mockDbUrl } = require('../../../devUtils/jest/mockConstants');

const { connectToDb } = require('../db');

jest.mock('mongoose');

describe('connect to db', () => {
  it('should call mongoose connect method with db url and right connection options', async () => {
    await connectToDb();

    expect(mongoose.connect).toHaveBeenCalledWith(mockDbUrl, {
      useNewUrlParser: true,
    });
  });
  describe('when mongodb connection fails', () => {
    it('rejects', async () => {
      mongoose.connect.mockImplementation(() => Promise.reject(new Error()));

      await expect(connectToDb()).rejects.toThrow();
    });
  });
});

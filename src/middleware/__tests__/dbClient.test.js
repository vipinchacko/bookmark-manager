'use strict';

const { MongoClient } = require('mongodb');

const {
  mockDbUrl,
  mockDbName,
} = require('../../../devUtils/jest/mockConstants');
const { dbClient } = require('../dbClient');

jest.mock('mongodb', () => ({
  MongoClient: jest.fn(),
}));

describe('dbClient', () => {
  const connect = jest.fn();
  const db = jest.fn();

  const req = {};
  const res = {};
  const next = () => {};

  beforeEach(() => {
    MongoClient.mockImplementation(() => ({
      connect,
      db,
    }));
  });

  it('should call MongoClient constructor with the right arguments', async () => {
    await dbClient(req, res, next);

    expect(MongoClient).toHaveBeenCalledWith(mockDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  it('should call MongoClient.connect', async () => {
    await dbClient(req, res, next);

    expect(connect).toHaveBeenCalledTimes(1);
  });

  it('should call MongoClient.db with the right DB url', async () => {
    await dbClient(req, res, next);

    expect(db).toHaveBeenCalledWith(mockDbName);
  });
});

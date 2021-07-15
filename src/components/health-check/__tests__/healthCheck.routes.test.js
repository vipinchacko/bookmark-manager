'use strict';

const request = require('supertest');

const app = require('../../../app');

describe('health-check', () => {
  describe('when system is available', () => {
    it('responds with status 200', async () => {
      const response = await request(app).get('/api/health-check');
      expect(response.statusCode).toBe(200);
    });
  });
});

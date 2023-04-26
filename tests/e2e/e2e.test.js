const request = require('supertest');
const app = require('../../src/index');

describe('GIVEN the API endpoint "/time"', () => {
  describe('WHEN I request the time for "00:00:00"', () => {
    const time = '00:00:00';

    let response;

    beforeAll(async () => {
      response = await request(app)
        .get(`/time`)
        .set({
          Accept: 'application/json',
        })
        .send({ time });
    });

    test('THEN a response status of 200 should be returned', () => {
      expect(response.status).toEqual(200);
    });
  });
});

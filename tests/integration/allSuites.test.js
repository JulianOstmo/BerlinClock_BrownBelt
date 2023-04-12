const request = require('supertest');
const app = require('../../src/index');

describe('GIVEN the API endpoint "/time"', () => {
  describe('WHEN I request the time for "00:00:00"', () => {
    const input = '00:00:00';

    test('THEN the seconds is "O"', async () => {
      await request(app)
        .get(`/time`)
        .set({
          Accept: 'application/json',
        })
        .send(input)
        .expect(200)
        .then((response) => {
          expect(response.body).toEqual(
            expect.objectContaining({ seconds: 'O' }),
          );
        });
    });
  });
});

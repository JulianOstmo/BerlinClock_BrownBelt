const request = require('supertest');
const app = require('../../src/index');

describe('GIVEN the API endpoint "/time"', () => {
  describe('WHEN I request the time for "00:00:00"', () => {
    const input = '00:00:00';

    let response;

    beforeAll(async () => {
      response = await request(app)
        .get(`/time`)
        .set({
          Accept: 'application/json',
        })
        .send(input);
    });

    test('THEN the seconds is "O"', () => {
      expect(response.body).toEqual(expect.objectContaining({ seconds: 'O' }));
    });

    test('THEN the top row (five hours) is "OOOO"', () => {
      expect(response.body).toEqual(
        expect.objectContaining({ topRow: 'OOOO' }),
      );
    });

    test('THEN the second row (single hours) is "OOOO"', () => {
      expect(response.body).toEqual(
        expect.objectContaining({ secondRow: 'OOOO' }),
      );
    });

    test('THEN the third row (five minutes) is "OOOOOOOOOOO"', () => {
      expect(response.body).toEqual(
        expect.objectContaining({ thirdRow: 'OOOOOOOOOOO' }),
      );
    });

    test('THEN the fourth row (one minute) is "OOOO"', () => {
      expect(response.body).toEqual(
        expect.objectContaining({ fourthRow: 'OOOO' }),
      );
    });
  });
});

const {
  Given,
  When,
  Then,
  Fusion,
  // eslint-disable-next-line import/no-extraneous-dependencies
} = require('jest-cucumber-fusion');
const request = require('supertest');
const app = require('../../../src/index');

let berlinClock;
let response;

Given('the BerlinClock API app', () => {
  berlinClock = request(app);
});

When('I send "00:00:00" to the /time route', async () => {
  response = await berlinClock
    .get(`/time`)
    .set({
      Accept: 'application/json',
    })
    .send('00:00:00');
});

Then('the response should include seconds set to "O"', () => {
  expect(response.body).toEqual(expect.objectContaining({ seconds: 'O' }));
});

Then('the response should include topRow (five hours) set to "OOOO"', () => {
  expect(response.body).toEqual(expect.objectContaining({ topRow: 'OOOO' }));
});

Then(
  'the response should include secondRow (single hours) set to "OOOO"',
  () => {
    expect(response.body).toEqual(
      expect.objectContaining({ secondRow: 'OOOO' }),
    );
  },
);

Then(
  'the response should include thirdRow (five minutes) set to "OOOOOOOOOOO"',
  () => {
    expect(response.body).toEqual(
      expect.objectContaining({ thirdRow: 'OOOOOOOOOOO' }),
    );
  },
);

Then('the response should include fourthRow (one minute) set to "OOOO"', () => {
  expect(response.body).toEqual(expect.objectContaining({ fourthRow: 'OOOO' }));
});

Fusion('BerlinClock.feature');

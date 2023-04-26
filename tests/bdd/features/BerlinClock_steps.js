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

When(/^I send (.*) to the time route$/, async (time) => {
  response = await berlinClock
    .get(`/time`)
    .set({
      Accept: 'application/json',
    })
    .send({ time });
});

Then(/^the response should include seconds set to (.*)$/, (seconds) => {
  expect(response.body).toEqual(expect.objectContaining({ seconds }));
});

Then(
  /^the response should include topRow \(five hours\) set to (.*)$/,
  (arg0) => {
    expect(response.body).toEqual(expect.objectContaining({ topRow: arg0 }));
  },
);

Then(
  /^the response should include secondRow \(single hours\) set to (.*)$/,
  (secondRow) => {
    expect(response.body).toEqual(expect.objectContaining({ secondRow }));
  },
);

Then(
  /^the response should include thirdRow \(five minutes\) set to (.*)$/,
  (thirdRow) => {
    expect(response.body).toEqual(expect.objectContaining({ thirdRow }));
  },
);

Then(
  /^the response should include fourthRow \(one minute\) set to (.*)$/,
  (fourthRow) => {
    expect(response.body).toEqual(expect.objectContaining({ fourthRow }));
  },
);

Fusion('BerlinClock.feature');

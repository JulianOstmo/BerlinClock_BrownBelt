const app = require('../../src/index');

describe('GIVEN a microservice express app', () => {
  describe('WHEN the app initialises', () => {
    test('THEN an express object should be returned', () => {
      expect(app).toBeTruthy();
    });
  });
});

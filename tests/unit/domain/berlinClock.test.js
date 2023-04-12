const BerlinClock = require('../../../src/domain/berlinClock');

describe('GIVEN the BerlinClock class', () => {
  describe('WHEN it is initialised with "OO:OO:OO"', () => {
    test('THEN getSeconds should return "O"', () => {
      const berlinClock = new BerlinClock('OO:OO:OO');
      expect(berlinClock.getSeconds()).toEqual('O');
    });
  });
});

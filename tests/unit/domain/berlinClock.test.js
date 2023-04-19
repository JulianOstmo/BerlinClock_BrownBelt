const BerlinClock = require('../../../src/domain/berlinClock');

describe('GIVEN the BerlinClock class', () => {
  let berlinClock;

  describe('WHEN it is initialised with "OO:OO:OO"', () => {
    const input = 'OO:OO:OO';

    beforeEach(() => {
      berlinClock = new BerlinClock(input);
    });

    test('THEN getSeconds should return "O"', () => {
      expect(berlinClock.getSeconds()).toEqual('O');
    });

    test('THEN getTopRow should return "OOOO"', () => {
      expect(berlinClock.getTopRow()).toEqual('OOOO');
    });

    test('THEN getSecondRow should return "OOOO"', () => {
      expect(berlinClock.getSecondRow()).toEqual('OOOO');
    });

    test('THEN getThirdRow should return "OOOOOOOOOOO"', () => {
      expect(berlinClock.getThirdRow()).toEqual('OOOOOOOOOOO');
    });

    test('THEN getFourthRow should return "OOOO"', () => {
      expect(berlinClock.getFourthRow()).toEqual('OOOO');
    });
  });
});

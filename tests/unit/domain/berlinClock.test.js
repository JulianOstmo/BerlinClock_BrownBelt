const BerlinClock = require('../../../src/domain/berlinClock');

describe('GIVEN the BerlinClock class', () => {
  let berlinClock;

  describe.each`
    time          | seconds | topRow    | secondRow | thirdRow         | fourthRow
    ${'00:00:00'} | ${'O'}  | ${'OOOO'} | ${'OOOO'} | ${'OOOOOOOOOOO'} | ${'OOOO'}
    ${'00:00:01'} | ${'Y'}  | ${'OOOO'} | ${'OOOO'} | ${'OOOOOOOOOOO'} | ${'OOOO'}
  `(
    'WHEN it is initialised with $time',
    ({ time, seconds, topRow, secondRow, thirdRow, fourthRow }) => {
      beforeEach(() => {
        berlinClock = new BerlinClock(time);
      });

      test(`THEN getSeconds should return "${seconds}"`, () => {
        expect(berlinClock.getSeconds()).toEqual(seconds);
      });

      test(`THEN getTopRow should return "${topRow}"`, () => {
        expect(berlinClock.getTopRow()).toEqual(topRow);
      });

      test(`THEN getSecondRow should return "${secondRow}"`, () => {
        expect(berlinClock.getSecondRow()).toEqual(secondRow);
      });

      test(`THEN getThirdRow should return "${thirdRow}"`, () => {
        expect(berlinClock.getThirdRow()).toEqual(thirdRow);
      });

      test(`THEN getFourthRow should return "${fourthRow}"`, () => {
        expect(berlinClock.getFourthRow()).toEqual(fourthRow);
      });
    },
  );
});

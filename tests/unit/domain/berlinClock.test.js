const BerlinClock = require('../../../src/domain/berlinClock');

describe('GIVEN the BerlinClock class', () => {
  let berlinClock;

  describe.each`
    time          | seconds | topRow    | secondRow | thirdRow         | fourthRow
    ${'00:00:00'} | ${'O'}  | ${'OOOO'} | ${'OOOO'} | ${'OOOOOOOOOOO'} | ${'OOOO'}
    ${'00:00:59'} | ${'Y'}  | ${'OOOO'} | ${'OOOO'} | ${'OOOOOOOOOOO'} | ${'OOOO'}
    ${'00:01:00'} | ${'O'}  | ${'OOOO'} | ${'OOOO'} | ${'OOOOOOOOOOO'} | ${'YOOO'}
    ${'00:04:00'} | ${'O'}  | ${'OOOO'} | ${'OOOO'} | ${'OOOOOOOOOOO'} | ${'YYYY'}
    ${'00:59:00'} | ${'O'}  | ${'OOOO'} | ${'OOOO'} | ${'OOOOOOOOOOO'} | ${'YYYY'}
  `(
    'WHEN it is initialised with $time',
    ({ time, seconds, topRow, secondRow, thirdRow, fourthRow }) => {
      let berlinClockTime;

      beforeEach(() => {
        berlinClock = new BerlinClock(time);
        berlinClockTime = berlinClock.getTime();
      });

      test(`THEN getTime should return an object containing {seconds: "${seconds}"}`, () => {
        expect(berlinClockTime).toEqual(expect.objectContaining({ seconds }));
      });

      test(`THEN getTime should return an object containing {topRow: "${topRow}"}`, () => {
        expect(berlinClockTime).toEqual(expect.objectContaining({ topRow }));
      });

      test(`THEN getTime should return an object containing {secondRow: "${secondRow}"}`, () => {
        expect(berlinClockTime).toEqual(expect.objectContaining({ secondRow }));
      });

      test(`THEN getTime should return an object containing {thirdRow: "${thirdRow}"}`, () => {
        expect(berlinClockTime).toEqual(expect.objectContaining({ thirdRow }));
      });

      test(`THEN getTime should return an object containing {fourthRow: "${fourthRow}"}`, () => {
        expect(berlinClockTime).toEqual(expect.objectContaining({ fourthRow }));
      });
    },
  );
});

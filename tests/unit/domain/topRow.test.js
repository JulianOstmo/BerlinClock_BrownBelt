const TopRow = require('../../../src/domain/topRow');

describe('GIVEN the TopRow class', () => {
  let topRow;

  describe.each`
    time    | output
    ${'00'} | ${'OOOO'}
    ${'05'} | ${'YOOO'}
    ${'10'} | ${'YYOO'}
    ${'15'} | ${'YYYO'}
    ${'20'} | ${'YYYY'}
    ${'23'} | ${'YYYY'}
  `('WHEN it is initialised with "$time"', ({ time, output }) => {
    beforeEach(() => {
      topRow = new TopRow(time);
    });

    test(`THEN getTopRow should return "${output}"`, () => {
      expect(topRow.getTopRow()).toEqual(output);
    });
  });
});

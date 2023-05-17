const SecondRow = require('../../../src/domain/secondRow');

describe('GIVEN the secondRow class', () => {
  let secondRow;

  describe.each`
    time    | output
    ${'00'} | ${'OOOO'}
    ${'01'} | ${'YOOO'}
    ${'02'} | ${'YYOO'}
    ${'03'} | ${'YYYO'}
    ${'04'} | ${'YYYY'}
    ${'23'} | ${'YYYO'}
  `('WHEN it is initialised with "$time"', ({ time, output }) => {
    beforeEach(() => {
      secondRow = new SecondRow(time);
    });

    test(`THEN getSecondRow should return "${output}"`, () => {
      expect(secondRow.getSecondRow()).toEqual(output);
    });
  });
});

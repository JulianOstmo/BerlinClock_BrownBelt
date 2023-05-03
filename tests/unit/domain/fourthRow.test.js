const FourthRow = require('../../../src/domain/fourthRow');

describe('GIVEN the FourthRow class', () => {
  let fourthRow;

  describe.each`
    time    | output
    ${'01'} | ${'YOOO'}
    ${'02'} | ${'YYOO'}
    ${'03'} | ${'YYYO'}
    ${'04'} | ${'YYYY'}
    ${'05'} | ${'OOOO'}
    ${'59'} | ${'YYYY'}
  `('WHEN it is initialised with "$time"', ({ time, output }) => {
    beforeEach(() => {
      fourthRow = new FourthRow(time);
    });

    test(`THEN getFourthRow should return "${output}"`, () => {
      expect(fourthRow.getFourthRow()).toEqual(output);
    });
  });
});

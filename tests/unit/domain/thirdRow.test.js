const ThirdRow = require('../../../src/domain/thirdRow');

describe('GIVEN the ThirdRow class', () => {
  let thirdRow;

  describe.each`
    time    | output
    ${'00'} | ${'OOOOOOOOOOO'}
    ${'05'} | ${'YOOOOOOOOOO'}
    ${'10'} | ${'YYOOOOOOOOO'}
    ${'15'} | ${'YYROOOOOOOO'}
    ${'30'} | ${'YYRYYROOOOO'}
    ${'45'} | ${'YYRYYRYYROO'}
    ${'55'} | ${'YYRYYRYYRYY'}
  `('WHEN it is initialised with "$time"', ({ time, output }) => {
    beforeEach(() => {
      thirdRow = new ThirdRow(time);
    });

    test(`THEN getThirdRow should return "${output}"`, () => {
      expect(thirdRow.getThirdRow()).toEqual(output);
    });
  });
});

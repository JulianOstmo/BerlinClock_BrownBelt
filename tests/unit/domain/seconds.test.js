const Seconds = require('../../../src/domain/seconds');

describe('GIVEN the Seconds class', () => {
  let seconds;

  describe.each`
    time    | output
    ${'00'} | ${'O'}
    ${'01'} | ${'Y'}
    ${'02'} | ${'O'}
    ${'59'} | ${'Y'}
  `('WHEN it is initialised with "$time"', ({ time, output }) => {
    beforeEach(() => {
      seconds = new Seconds(time);
    });

    test(`THEN getSeconds should return "${output}"`, () => {
      expect(seconds.getSeconds()).toEqual(output);
    });
  });
});

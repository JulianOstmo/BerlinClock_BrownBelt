const Light = require('../../../src/domain/light');

describe.each`
  colour      | value
  ${'Yellow'} | ${'Y'}
  ${'Red'}    | ${'R'}
`('GIVEN a $colour light', ({ value }) => {
  let light;

  beforeEach(() => {
    light = new Light(value);
  });

  describe('WHEN it is initialised', () => {
    test('THEN its value should be "O"', () => {
      expect(light.getValue()).toBe('O');
    });
  });

  describe('WHEN it is turned on', () => {
    beforeEach(() => {
      light.turnOn();
    });

    test(`THEN its value should be "${value}"`, () => {
      expect(light.getValue()).toBe(value);
    });
  });
});

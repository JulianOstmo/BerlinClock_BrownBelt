const Light = require('../../../src/domain/light');
const Row = require('../../../src/domain/row');

const YELLOW = 'Y';
const RED = 'R';

describe.each`
  colours                  | totalLightsOn | expectedValue
  ${[YELLOW]}              | ${1}          | ${'Y'}
  ${[RED]}                 | ${1}          | ${'R'}
  ${[YELLOW, YELLOW]}      | ${1}          | ${'YO'}
  ${[YELLOW, YELLOW]}      | ${2}          | ${'YY'}
  ${[YELLOW, YELLOW, RED]} | ${3}          | ${'YYR'}
`(
  'GIVEN a Row with Lights $colours',
  ({ colours, totalLightsOn, expectedValue }) => {
    const row = new Row(colours.map((colour) => new Light(colour)));

    describe(`WHEN ${totalLightsOn} Light is turned on`, () => {
      row.turnOnLights(totalLightsOn);

      test(`THEN the Row should have a value of "${expectedValue}"`, () => {
        expect(row.getValue()).toEqual(expectedValue);
      });
    });
  },
);

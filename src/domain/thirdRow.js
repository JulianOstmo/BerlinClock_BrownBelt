const Light = require('./light');
const Row = require('./row');

const YELLOW = 'Y';
const RED = 'R';

const LIGHT_COLOURS = [
  YELLOW,
  YELLOW,
  RED,
  YELLOW,
  YELLOW,
  RED,
  YELLOW,
  YELLOW,
  RED,
  YELLOW,
  YELLOW,
];

class ThirdRow {
  constructor(minutes) {
    this.minutes = minutes;
    this.row = new Row(LIGHT_COLOURS.map((colour) => new Light(colour)));

    const totalLightsOn = Math.floor(this.minutes / 5);
    this.row.turnOnLights(totalLightsOn);
  }

  getThirdRow() {
    return this.row.getValue();
  }
}

module.exports = ThirdRow;

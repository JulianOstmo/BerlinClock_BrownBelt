const Light = require('./light');

const OFF = 'O';
const YELLOW = 'Y';

class FourthRow {
  constructor(minutes) {
    this.minutes = minutes;
    this.lights = [
      new Light(YELLOW),
      new Light(YELLOW),
      new Light(YELLOW),
      new Light(YELLOW),
    ];
  }

  getFourthRow() {
    const totalLights = 4;
    const totalYellowLights = this.minutes % 5;
    const yellows = YELLOW.repeat(totalYellowLights);
    const offs = OFF.repeat(totalLights - totalYellowLights);
    return yellows + offs;
  }
}

module.exports = FourthRow;

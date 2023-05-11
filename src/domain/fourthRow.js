const Light = require('./light');

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
    const totalOnLights = this.minutes % 5;

    this.lights.forEach((light, count) => {
      if (count + 1 <= totalOnLights) {
        light.turnOn();
      }
    });

    return this.lights.map((light) => light.getValue()).join('');
  }
}

module.exports = FourthRow;

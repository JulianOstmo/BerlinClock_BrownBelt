/* eslint-disable class-methods-use-this */

const OFF = 'O';
const YELLOW = 'Y';

const isEven = (value) => value % 2 === 0;

class BerlinClock {
  constructor(time) {
    const [, minutes, seconds] = time.split(':');
    this.seconds = seconds;
    this.minutes = minutes;
  }

  getSeconds() {
    if (isEven(this.seconds)) {
      return OFF;
    }

    return YELLOW;
  }

  getTopRow() {
    return 'OOOO';
  }

  getSecondRow() {
    return 'OOOO';
  }

  getThirdRow() {
    return 'OOOOOOOOOOO';
  }

  getFourthRow() {
    const totalLights = 4;
    const totalYellowLights = this.minutes % 5;
    const yellows = YELLOW.repeat(totalYellowLights);
    const offs = OFF.repeat(totalLights - totalYellowLights);
    return yellows + offs;
  }
}

module.exports = BerlinClock;

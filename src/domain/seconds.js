const Light = require('./light');

const YELLOW = 'Y';

const isOdd = (value) => value % 2 !== 0;

class Seconds {
  constructor(seconds) {
    this.seconds = seconds;
    this.light = new Light(YELLOW);
  }

  getSeconds() {
    if (isOdd(this.seconds)) {
      this.light.turnOn();
    }

    return this.light.getValue();
  }
}

module.exports = Seconds;

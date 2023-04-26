/* eslint-disable class-methods-use-this */
class BerlinClock {
  constructor(time) {
    const [, , seconds] = time.split(':');
    this.seconds = seconds;
  }

  getSeconds() {
    return this.seconds % 2 === 0 ? 'O' : 'Y';
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
    return 'OOOO';
  }
}

module.exports = BerlinClock;

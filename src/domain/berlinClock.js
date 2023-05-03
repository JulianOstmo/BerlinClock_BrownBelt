/* eslint-disable class-methods-use-this */
const FourthRow = require('./fourthRow');
const Seconds = require('./seconds');

class BerlinClock {
  constructor(time) {
    const [, minutes, seconds] = time.split(':');
    this.seconds = seconds;
    this.minutes = minutes;
  }

  getTime() {
    const seconds = new Seconds(this.seconds).getSeconds();
    const fourthRow = new FourthRow(this.minutes).getFourthRow();
    return {
      seconds,
      topRow: 'OOOO',
      secondRow: 'OOOO',
      thirdRow: 'OOOOOOOOOOO',
      fourthRow,
    };
  }
}

module.exports = BerlinClock;

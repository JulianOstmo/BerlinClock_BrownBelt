const FourthRow = require('./fourthRow');
const Seconds = require('./seconds');
const ThirdRow = require('./thirdRow');

class BerlinClock {
  constructor(time) {
    const [, minutes, seconds] = time.split(':');
    this.seconds = seconds;
    this.minutes = minutes;
  }

  getTime() {
    const seconds = new Seconds(this.seconds).getSeconds();
    const fourthRow = new FourthRow(this.minutes).getFourthRow();
    const thirdRow = new ThirdRow(this.minutes).getThirdRow();

    return {
      seconds,
      topRow: 'OOOO',
      secondRow: 'OOOO',
      thirdRow,
      fourthRow,
    };
  }
}

module.exports = BerlinClock;

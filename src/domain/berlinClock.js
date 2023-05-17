const FourthRow = require('./fourthRow');
const SecondRow = require('./secondRow');
const Seconds = require('./seconds');
const ThirdRow = require('./thirdRow');

class BerlinClock {
  constructor(time) {
    const [hours, minutes, seconds] = time.split(':');
    this.seconds = seconds;
    this.minutes = minutes;
    this.hours = hours;
  }

  getTime() {
    const seconds = new Seconds(this.seconds).getSeconds();
    const fourthRow = new FourthRow(this.minutes).getFourthRow();
    const thirdRow = new ThirdRow(this.minutes).getThirdRow();
    const secondRow = new SecondRow(this.hours).getSecondRow();

    return {
      seconds,
      topRow: 'OOOO',
      secondRow,
      thirdRow,
      fourthRow,
    };
  }
}

module.exports = BerlinClock;

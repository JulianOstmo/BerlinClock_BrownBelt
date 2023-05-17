const FourthRow = require('./fourthRow');
const SecondRow = require('./secondRow');
const Seconds = require('./seconds');
const ThirdRow = require('./thirdRow');
const TopRow = require('./topRow');

class BerlinClock {
  constructor(time) {
    const [hours, minutes, seconds] = time.split(':');
    this.seconds = seconds;
    this.minutes = minutes;
    this.hours = hours;
  }

  getTime() {
    const seconds = new Seconds(this.seconds).getSeconds();
    const topRow = new TopRow(this.hours).getTopRow();
    const secondRow = new SecondRow(this.hours).getSecondRow();
    const thirdRow = new ThirdRow(this.minutes).getThirdRow();
    const fourthRow = new FourthRow(this.minutes).getFourthRow();

    return {
      seconds,
      topRow,
      secondRow,
      thirdRow,
      fourthRow,
    };
  }
}

module.exports = BerlinClock;

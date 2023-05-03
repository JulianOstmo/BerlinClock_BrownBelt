const OFF = 'O';
const YELLOW = 'Y';

const isEven = (value) => value % 2 === 0;

class Seconds {
  constructor(seconds) {
    this.seconds = seconds;
  }

  getSeconds() {
    if (isEven(this.seconds)) {
      return OFF;
    }

    return YELLOW;
  }
}

module.exports = Seconds;

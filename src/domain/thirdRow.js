class ThirdRow {
  constructor(minutes) {
    this.minutes = minutes;
  }

  getThirdRow() {
    if (this.minutes === '05') {
      return 'YOOOOOOOOOO';
    }
    return 'OOOOOOOOOOO';
  }
}

module.exports = ThirdRow;

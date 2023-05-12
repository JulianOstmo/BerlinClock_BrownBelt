const Light = require('./light');
const Row = require('./row');

const YELLOW = 'Y';

class FourthRow {
  constructor(minutes) {
    this.minutes = minutes;
    this.row = new Row([
      new Light(YELLOW),
      new Light(YELLOW),
      new Light(YELLOW),
      new Light(YELLOW),
    ]);

    const totalLightsOn = this.minutes % 5;
    this.row.turnOnLights(totalLightsOn);
  }

  getFourthRow() {
    return this.row.getValue();
  }
}

module.exports = FourthRow;

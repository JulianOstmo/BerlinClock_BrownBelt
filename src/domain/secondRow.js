const Light = require('./light');
const Row = require('./row');

const YELLOW = 'Y';

class SecondRow {
  constructor(hours) {
    this.hours = parseInt(hours, 10);
    this.row = new Row([
      new Light(YELLOW),
      new Light(YELLOW),
      new Light(YELLOW),
      new Light(YELLOW),
    ]);

    const totalLightsOn = this.hours % 5;
    this.row.turnOnLights(totalLightsOn);
  }

  getSecondRow() {
    return this.row.getValue();
  }
}

module.exports = SecondRow;

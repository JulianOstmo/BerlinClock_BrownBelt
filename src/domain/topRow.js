const Light = require('./light');
const Row = require('./row');

const YELLOW = 'Y';

class TopRow {
  constructor(hours) {
    this.hours = parseInt(hours, 10);
    this.row = new Row([
      new Light(YELLOW),
      new Light(YELLOW),
      new Light(YELLOW),
      new Light(YELLOW),
    ]);

    const totalLightsOn = Math.floor(this.hours / 5);
    this.row.turnOnLights(totalLightsOn);
  }

  getTopRow() {
    return this.row.getValue();
  }
}

module.exports = TopRow;

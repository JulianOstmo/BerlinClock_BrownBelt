class Row {
  constructor(lights) {
    this.lights = lights;
  }

  turnOnLights(totalLightsOn) {
    this.lights.forEach((light, count) => {
      if (count + 1 <= totalLightsOn) {
        light.turnOn();
      }
    });
  }

  getValue() {
    return this.lights.map((light) => light.getValue()).join('');
  }
}

module.exports = Row;

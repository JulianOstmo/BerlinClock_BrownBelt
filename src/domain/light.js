class Light {
  constructor(colour) {
    this.value = 'O';
    this.colour = colour;
  }

  turnOn() {
    this.value = this.colour;
  }

  getValue() {
    return this.value;
  }
}

module.exports = Light;

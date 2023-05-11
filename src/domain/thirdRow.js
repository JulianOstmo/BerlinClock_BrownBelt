const YELLOW = 'Y';
const RED = 'R';
const OFF = 'O';

const setRedLight = (onLights, redIndex) => {
  const lights = onLights.split('');
  lights[redIndex] = RED;
  return lights.join('');
};

class ThirdRow {
  constructor(minutes) {
    this.minutes = minutes;
  }

  getThirdRow() {
    const totalOnLights = Math.floor(this.minutes / 5);
    const totalOffs = 11 - totalOnLights;
    let onLights = YELLOW.repeat(totalOnLights);

    const totalRedLights = Math.floor(this.minutes / 15);
    for (let index = 1; index <= totalRedLights; index += 1) {
      onLights = setRedLight(onLights, index * 3 - 1);
    }

    const offLights = OFF.repeat(totalOffs);
    return onLights + offLights;
  }
}

module.exports = ThirdRow;

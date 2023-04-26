const express = require('express');
const BerlinClock = require('./domain/berlinClock');

const app = express();

app.use(express.json());

app.get('/time', (req, res) => {
  const { time } = req.body;
  const berlinClock = new BerlinClock(time);

  const output = {
    seconds: berlinClock.getSeconds(),
    topRow: berlinClock.getTopRow(),
    secondRow: berlinClock.getSecondRow(),
    thirdRow: berlinClock.getThirdRow(),
    fourthRow: berlinClock.getFourthRow(),
  };

  res.status(200).send(output);
});

module.exports = app;

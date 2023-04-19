const express = require('express');
const BerlinClock = require('./domain/berlinClock');

const app = express();

app.use(express.json());

app.get('/time', (req, res) => {
  const berlinClock = new BerlinClock();

  const time = {
    seconds: berlinClock.getSeconds(),
    topRow: berlinClock.getTopRow(),
    secondRow: berlinClock.getSecondRow(),
  };

  res.status(200).send(time);
});

module.exports = app;

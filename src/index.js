const express = require('express');
const BerlinClock = require('./domain/berlinClock');

const app = express();

app.use(express.json());

app.post('/time', (req, res) => {
  const { time } = req.body;
  const berlinClock = new BerlinClock(time);

  const output = berlinClock.getTime();

  res.status(200).send(output);
});

module.exports = app;

#! /usr/bin/env node
const moment = require('moment')
const argv = require('yargs').argv;

function runIt(time) {
  time = moment.utc(time);
  return {
    iso: time.format(),
    epoch_millis: time.valueOf(),
    filename: time.format('YYYYMMDD_HHmm')
  };
}

const start = moment.utc().valueOf();

if (argv.date && argv.spread) {
  const earliest = moment.utc(argv.date).valueOf();
  const spread = argv.spread;
  const delta = start - earliest;
  const increment = Math.floor(delta / (spread - 1));
  let iterations = spread;
  let time = earliest;

  while (iterations > 0) {
    const result = runIt(time, spread, increment);
    const index = spread - iterations + 1;
    console.log({
      [index]: result
    });
    time += increment;
    iterations--;
  }
} else {
  let dateInput;

  if (argv.date) {
    dateInput = argv.date;
  } else {
    dateInput = start;
  }

  console.log(runIt(dateInput));
}

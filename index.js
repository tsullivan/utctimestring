#! /usr/bin/env node
const moment = require('moment')
const now = moment.utc();
const formats = {
  iso: now.format(),
  epoch_millis: now.valueOf(),
  filename: now.format('YYYYMMDD_HHmm')
};
console.log(formats);

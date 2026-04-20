#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function getQuotes(file = path.join(__dirname, 'quotes.txt')) {
  return fs.readFileSync(file, 'utf8').split('\n').filter(Boolean);
}

function pickRandom(quotes, count = 1) {
  const out = [];
  for (let i = 0; i < count; i++) {
    out.push(quotes[Math.floor(Math.random() * quotes.length)]);
  }
  return out;
}

if (require.main === module) {
  const args = process.argv.slice(2);
  const i = args.indexOf('--count');
  const count = i !== -1 ? parseInt(args[i + 1], 10) : 1;
  pickRandom(getQuotes(), count).forEach(q => console.log(q));
}

module.exports = { getQuotes, pickRandom };

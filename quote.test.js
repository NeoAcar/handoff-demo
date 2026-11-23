const assert = require('assert');
const { getQuotes, pickRandom } = require('./quote');

const quotes = getQuotes();
assert(quotes.length > 0, 'quotes should load');
assert.strictEqual(pickRandom(quotes, 1).length, 1);
assert.strictEqual(pickRandom(quotes, 3).length, 3);
assert(quotes.includes(pickRandom(quotes, 1)[0]), 'picked quote must be from list');

const { execSync } = require('child_process');
const out = execSync('node quote.js --json --count 2').toString().trim();
const parsed = JSON.parse(out);
assert(Array.isArray(parsed) && parsed.length === 2, '--json should emit array of length count');
assert(parsed.every(q => quotes.includes(q)), 'json quotes must be from list');

console.log('ok');

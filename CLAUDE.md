# handoff-demo

Tiny Node.js CLI that prints random quotes from `quotes.txt`.

## Files
- `quote.js` — CLI entrypoint; exports `getQuotes` and `pickRandom` for testing.
- `quotes.txt` — one quote per line.
- `quote.test.js` — assertion-based tests, run with `node quote.test.js`.

## Usage
```
node quote.js              # print one random quote
node quote.js --count 3    # print 3 random quotes
```

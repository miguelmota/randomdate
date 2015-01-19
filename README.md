# randomdate

Generate a random date within a date range

# Install

```bash
npm install randomdate
```

# Usage

```javascript
var randomDate = require('randomdate');

randomDate(new Date(2014,09,01), new Date(2014,11,12)); // Thu Oct 23 2014 23:59:43 GMT-0700 (PDT)
```

# Docs

#### `randomDate(startDate, [endDate=Date.now()])`

Returns a Date object.

# License

MIT

var test = require('tape');
var randomDate = require('../randomdate');

test('randomdate', function (t) {
  t.plan(4);

  t.equal(!!~[1,2].indexOf(randomDate(new Date(2014,11,01), new Date(2014,11,03)).getDate()), true);
  t.equal(randomDate(), undefined);
  t.equal(randomDate({}), undefined);
  t.equal(randomDate(343), undefined);

});

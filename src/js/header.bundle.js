'use strict';

var kibe = require('kibe');
kibe({
  abodev: kibe.js('abo', location.protocol === 'http:' ?
    'http://localhost:1769/index.js' :
    'https://localhost:1770/index.js'),
  aboprod: kibe.js('abo', 'http://localhost:9595/dev/todomvc-ab/index.js')
});

window.kibe = kibe;

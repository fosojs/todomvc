'use strict';

var kibe = require('kibe');
kibe({
  abo: function(mode) {
    if (mode === 'abodev') {
      return location.protocol === 'http:' ?
        'http://localhost:1769/index.js' : 'https://localhost:1770/index.js';
    }
    if (mode === 'aboprod') {
      return 'http://localhost:9595/dev/todomvc-ab/index.js';
    }
  }
});

window.kibe = kibe;

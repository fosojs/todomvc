"use strict";

var $ = require('jquery');
var Backbone = require('backbone');
var AppView = require('./views/app');
var Workspace = require('./routers/router');
window.kibe = require('kibe');
window.kibe({
  abo: function(mode) {
    if (mode === 'abodev') {
      return location.protocol === 'http:' ?
        'http://localhost:1769/index.js' : 'https://localhost:1770/index.js'
    }
    if (mode === 'aboprod') {
      return 'http://localhost:9595/dev/todomvc-ab/index.js';
    }
  }
});

Backbone.$ = $;

// Initialize routing and start Backbone.history()
new Workspace();
Backbone.history.start();

// Initialize the application view
new AppView();

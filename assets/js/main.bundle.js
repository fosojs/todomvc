'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var AppView = require('./views/app');
var Workspace = require('./routers/router');

Backbone.$ = $;

// Initialize routing and start Backbone.history()
new Workspace();
Backbone.history.start();

// Initialize the application view
new AppView();

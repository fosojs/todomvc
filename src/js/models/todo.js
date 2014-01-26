"use strict";

var $ = require('jquery')(window);
var _ = require('underscore');
var Backbone = require('backbone');

Backbone.$ = $;

module.exports = Backbone.Model.extend({
    // Default attributes for the todo
    // and ensure that each todo created has `title` and `completed` keys.
    defaults: {
        title: '',
        completed: false
    },

    // Toggle the `completed` state of this todo item.
    toggle: function () {
        this.save({
            completed: !this.get('completed')
        });
    }
});

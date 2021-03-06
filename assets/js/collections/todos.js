"use strict";

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Todo = require('../models/todo');
Backbone.LocalStorage = require('backbone.localstorage');

Backbone.$ = $;

var TodoCollection = Backbone.Collection.extend({

    // Reference to this collection's model.
    model: Todo,

    // Save all of the todo items under the `"todos"` namespace.
    localStorage: new Backbone.LocalStorage('todos-backbone'),

    // Filter down the list of all todo items that are finished.
    completed: function () {
        return this.filter(function (todo) {
            return todo.get('completed');
        });
    },

    // Filter down the list to only todo items that are still not finished.
    remaining: function () {
        return this.without.apply(this, this.completed());
    },

    // We keep the Todos in sequential order, despite being saved by unordered
    // GUID in the database. This generates the next order number for new items.
    nextOrder: function () {
        if (!this.length) {
            return 1;
        }
        return this.last().get('order') + 1;
    },

    // Todos are sorted by their original insertion order.
    comparator: function (todo) {
        return todo.get('order');
    }
});

module.exports = new TodoCollection();

var JST = {};JST["stats"] = function anonymous(it) {
var out='<span id="todo-count"><strong><%= remaining %></strong> <%= remaining == 1 ? \'item\' : \'items\' %> left</span><ul id="filters"><li><a class="selected" href="#/">All</a></li><li><a href="#/active">Active</a></li><li><a href="#/completed">Completed</a></li></ul><% if ( completed ) { %><button id="clear-completed">Clear completed (<%= completed %>)</button><% } %>';return out;
};
JST["todos"] = function anonymous(it) {
var out='<div class="view"><input class="toggle" type="checkbox" <%= completed ? \'checked\' : \'\' %>><label><%- title %></label><button class="destroy"></button></div><input class="edit" value="<%- title %>">';return out;
};module.exports = JST;
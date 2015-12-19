## Description

This project is being used to demonstrate how to use [foso][] with [gulp][] to bundle resources.
[TodoMVC][] is the original project that this is based on.  It integrates Backbone.js + Browserify
to create a simple todo list within localstorage.

This does require that nodeJS and gulp be installed.


## Quick start

```sh
$ git clone git://github.com/fosojs/todomvc.git
# install dependent plugins
$ cd todomvc
$ npm install     # Install gulp/foso dev dependencies into /node_modules
$ bower install   # Install front-end resources from bower into /bower_components
```

[todoMVC]: http://addyosmani.github.com/todomvc
[gulp]: https://github.com/gulpjs/gulp
[foso]: https://github.com/fosojs/foso

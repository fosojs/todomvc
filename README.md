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
$ npm install # Install gulp dev dependencies into /node_modules
```


## Usage

In order to start developing the website, run `gulp develop` in the root directory
of the project. This command will render the page and bundle the assets.

In order to generate a production ready page, run `gulp publish`. The rendered page
will reference resources hosted on the [foso-cdn][].

To publish a new version of the assets, just publish a new version of the assets' npm module.


[todoMVC]: http://addyosmani.github.com/todomvc
[gulp]: https://github.com/gulpjs/gulp
[foso]: https://github.com/fosojs/foso
[foso-cdn]: https://github.com/fosojs/cdn

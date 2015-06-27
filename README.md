## Description

This project is being used to demonstrate how to use [foso][] with [gulp][] to bundle resources. [TodoMVC][] is the original project that this is based on.  It integrates Backbone.js + Browserify to create a simple todo list within localstorage. The project also is using [Bower][] for package management of some front-end resouces.

This does require that nodeJS, gulp, and bower be installed.

## Quick start

```sh
$ git clone git://github.com/fosojs/todomvc-foso.git
# install dependent plugins
$ cd todomvc-foso
$ npm install     # Install gulp/foso dev dependencies into /node_modules
$ bower install   # Install front-end resources from bower into /bower_components
```

## Directory structure
<pre>
|-- bower_components - Project dependencies from Bower
|-- dev - Directory containing development environment of site for testing.
|-- publish - Contains production environment. Files are compressed.
|-- src
|   |-- css - Source less files
|   |-- img - Source images
|   |-- js - Source js files. Each file is an amd module
|   `-- index.bundle.html - Base index page
`-- gulpfile.js - Contains the build process for this setup
`-- bower.json - Defines dependencies for Bower
`-- package.json - Describes current project and its dependencies
`-- README.md - This file.
</pre>
## Process
This project is meant to be used as a template. Use what you can, remove what you don't want.

Development occurs within the `/src` directory. While you are actively developing your project it is recommended that keep `gulp` running in the background.  As gulp sees your file changes it will build the necessary files into the `/dev` directory.  So point your browser to the index file within /dev for see the results.

After you have completed your changes and are ready to push to a production environment execute the `gulp --production` command.  This will rebuild the file structure and uglify the css and js files into the `/publish` directory. The publish directory should be ready to be pushed or ftped to your production environment.

## Demonstrates

* Fosify
* Lint JS files with jshint
* Copy source files into a publish directory
* Run tasks when files being watched are saved


[todoMVC]: http://addyosmani.github.com/todomvc
[gulp]: https://github.com/gulpjs/gulp
[bower]: https://github.com/twitter/bower
[foso]: https://github.com/fosojs/foso

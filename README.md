[![Build Status](https://travis-ci.org/legworkstudio/rip-it-with-gulp.svg?branch=master)](https://travis-ci.org/legworkstudio/rip-it-with-gulp)
[![dependencies](http://img.shields.io/david/legworkstudio/rip-it-with-gulp.svg?style=flat-square)](https://david-dm.org/legworkstudio/rip-it-with-gulp#info=dependencies)

# rip-it-with-gulp
A cool place to start with Gulp.

## Getting Started
- Run `npm install`
- Run `gulp`
  - If you get an error running `gulp`, try running `npm i -g gulp-cli`
- Check'r out http://localhost:4000

## Configure
You can set basic configurations for your particular setup as well as app meta and build details in the `gulp/config.js` file.

## Dist
To create a dist build, minified with source maps.
- run `gulp dist -e production`

## Templates & Markup
Templates & Markup are handled by [mustache](https://mustache.github.io/) which allows us to create partials for common used components as well as environment based markup.

To use a template on the client side: ( note this auto resolves the path so no need to ever use `../../` the base is always `templates` )
```javascript
let template = require('templates/example.html')(data:json)
```

## Bundled libs
The project starts off with `lodash`, `jQuery`, `mustache` and `modernizr` prebuilt and included. You don't need to expose them or import them anywhere.

## Dependency Management
Need to add a dependency? There are couple ways to do that.
  - Perfile require:
    - `npm install YOUR_DEP_PACKAGE --save`
    - Then in places you need it `import MY_PACKAGE from 'my-package'` and use in files you need it.

  - Global Dependency
    - `npm install YOUR_DEP_PACKAGE --save`
    - In `gulp/webpack/plugins/plugins.js` add the plugin

      ```javascript
      new webpack.ProvidePlugin({
        YOUR_DEPENDENCY: "your_dependency"
      })
      ```
    - The key you give your dependency is how you will be able to access it.
    - Make sure you add any configurations if needed ( see Modernizr )


## File structure
The idea is to have everything live inside of the `src` and build into `public` during dev and dist.

## Tools
This project is built on top of a number of different tools best suited for their respective tasks. Using Gulp as the task runner we can easily modify and customize each build to specific project needs.

- Gulp
  - Task management
  - Configuration ( `gulp/config.js` )
  - Reving files
  - Watching file changes
  - Compressing images
  - Uploading to s3 or desired destination

- Webpack
  - Javascript Bundling
  - Transpiling
  - Dependency management
  - Tree shaking / Deduping
  - Common modules
  - Minification
  - ESLint
  - Sourcemaps

- Node Sass
  - Compiling SASS/SCSS files
  - Minification of css
  - Autoprefixing
  - Sourcemaps

- Browsersync
  - Basic dev server
  - Hot replacing CSS
  - Manage multiple devices

- Mustache
  - Static HTML creation using partials and includes
  - Dynamic clientside templates for javascript

## Tasks
run `gulp --tasks`
<pre>
  ├── clean
  ├── cleanup
  ├── copy
  ├─┬ default
  │ └─┬- series
  │   ├── clean
  │   ├── scripts
  │   ├── styles
  │   ├── markup
  │   ├── copy
  │   └─┬- parallel
  │     ├── watch
  │     └── server
  ├─┬ dist
  │ └─┬- series
  │   ├── clean
  │   ├── styles
  │   ├── scripts
  │   ├── markup
  │   ├── rev
  │   ├── clean
  │   ├── replace
  │   ├── copy
  │   └── cleanup
  ├─┬ markup
  │ └─┬- series
  │   └── compileHTML
  ├─┬ replace
  │ └─┬- series
  │   └── replaceRefs
  ├─┬ rev
  │ └─┬- series
  │   ├── revScripts
  │   └── revStyles
  ├─┬ scripts
  │ └─┬- series
  │   ├── setConfiguration
  │   ├── getManifest
  │   └── compileScripts
  ├── server
  ├─┬ styles
  │ └─┬- series
  │   ├── lint
  │   ├── build
  │   └── minify
  └── watch
</pre>

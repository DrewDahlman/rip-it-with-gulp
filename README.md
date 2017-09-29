[![Build Status](https://travis-ci.org/legworkstudio/rip-it-with-gulp.svg?branch=master)](https://travis-ci.org/legworkstudio/rip-it-with-gulp)
[![peer deps](http://img.shields.io/david/peer/legworkstudio/rip-it-with-gulp.svg?style=flat-square)](https://david-dm.org/legworkstudio/rip-it-with-gulp#info=peerDependencies)
[![dependencies](http://img.shields.io/david/legworkstudio/rip-it-with-gulp.svg?style=flat-square)](https://david-dm.org/legworkstudio/rip-it-with-gulp#info=dependencies)

# rip-it-with-gulp
A cool place to start with Gulp.

## Getting Started
- run `npm install`
- run `gulp`
- Check'r out http://localhost:400

## Dist
To create a dist build, minified with source maps.
- run `gulp dist -e production`

## Templates & Markup
Templates & Markup are handled by [mustache](https://mustache.github.io/) which allows us to create partials for common used components as well as environment based markup.

To use a template on the client side:
```javascript
let template = require('./templates/example.html')({data})
```

## Bundled libs
The project starts off with `lodash`, `jQuery`, and `mustache` prebuilt and included. You don't need to expose them or import them anywhere.

## File structure
The idea is to have everything live inside of the `src` and build into `public` during dev and dist.

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

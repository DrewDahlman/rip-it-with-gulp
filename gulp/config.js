var path = require("path");

module.exports = {
  "port": "4000", // Port to run on
  "root": path.resolve("./public"), // Where to serve from
  "dev": "public", // Directory for dev assets to compile to
  "prod": "tmp", // Directory for tmp build assets to compile to
  "sources": [], // Empty holder
  "assetPath": "src", // Source
  "watchPath": "src", // Watch source

  // Build specific settings
  "build": {
    "browserlist": ['> 0.5%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
  },

  // Meta for frontend static templates
  "meta": {
    "google_analytics": "1234",
    "site_title": "Rip it with Gulp",
    "site_description": "An example project",
    "site_keywords": "Rip it with gulp!",
    "environment": process.env.NODE_ENV
  }
};

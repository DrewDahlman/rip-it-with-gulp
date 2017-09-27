var path = require('path');

module.exports = {
  'port': '4000', // Port to run on
  'root': path.resolve('./public'), // Where to serve from
  'dev': 'public', // Directory for dev assets to compile to
  'prod': 'public', // Directory for production assets to compile to
  'sources': [], // Empty holder
  'assetPath': 'src', // Source
  'watchPath': 'src', // Watch source
};

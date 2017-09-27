let path = require('path');
let webpack = require('webpack');

module.exports = {
  output: {
    filename: '[name].js',
  },
  module: {
    loaders: [{
      test: /.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
		new webpack.ProvidePlugin({
			jQuery: "jquery",
			$: "jquery"
		})
	]
};
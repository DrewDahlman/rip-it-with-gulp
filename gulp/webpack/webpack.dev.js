let path = require('path');
let webpack = require('webpack');

module.exports = {
  output: {
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        query: {
          configFile: './.eslintrc.js',
          fix: true
        }
      }
    ]
  },
  plugins: [
		new webpack.ProvidePlugin({
			jQuery: "jquery",
			$: "jquery"
		}),
    new webpack.NoEmitOnErrorsPlugin()
	]
};

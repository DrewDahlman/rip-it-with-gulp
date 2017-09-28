let path    = require("path");
let webpack = require("webpack");

module.exports = {
  output: {
    filename: "[name].js",
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "eslint-loader",
        query: {
          configFile: "./.eslintrc.js",
          fix: true
        }
      }
    ],
    rules: [ {
        test: /\.html$/,
        loader: 'mustache-loader'
        // loader: 'mustache-loader?minify'
        // loader: 'mustache-loader?{ minify: { removeComments: false } }'
        // loader: 'mustache-loader?noShortcut'
    } ]
  },
  plugins: [
		new webpack.ProvidePlugin({
			'window.jQuery'    : 'jquery',
      'window.$'         : 'jquery',
      'jQuery'           : 'jquery',
      '$'                : 'jquery'
		}),
    new webpack.ProvidePlugin({
      Mustache: "mustache"
    }),
    new webpack.ProvidePlugin({
      _: "lodash"
    }),
    new webpack.NoEmitOnErrorsPlugin()
	]
};

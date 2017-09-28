let path      = require("path"),
    webpack   = require("webpack"),
    config    = require("../config");

module.exports = {
  output: {
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: 'mustache-loader'
        // loader: 'mustache-loader?minify'
        // loader: 'mustache-loader?{ minify: { removeComments: true } }'
        // loader: 'mustache-loader?noShortcut'
      }
    ]
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
		new webpack.optimize.UglifyJsPlugin({
		  sourceMap: true,
		})
	],
	devtool: "source-map"
};

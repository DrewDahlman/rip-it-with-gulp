let path      = require("path"),
    webpack   = require("webpack"),
    config    = require("../config"),
    ModernizrWebpackPlugin = require('modernizr-webpack-plugin');

let modernizr_config = require('../../node_modules/modernizr/lib/config-all.json');

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
  resolve: {
    alias: {
      templates: path.resolve(__dirname, "../../src/templates")
    }
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
		}),
    new ModernizrWebpackPlugin(modernizr_config)
	],
	devtool: "source-map"
};

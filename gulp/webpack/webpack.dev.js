let path    = require("path"),
    webpack = require("webpack"),
    ModernizrWebpackPlugin = require('modernizr-webpack-plugin');

let modernizr_config = require('../../node_modules/modernizr/lib/config-all.json');

module.exports = {
  output: {
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "eslint-loader",
        query: {
          configFile: "./.eslintrc.js",
          fix: true
        }
      },
      {
        test: /.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'mustache-loader'
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
    new ModernizrWebpackPlugin(modernizr_config),
    new webpack.NoEmitOnErrorsPlugin()
	]
};

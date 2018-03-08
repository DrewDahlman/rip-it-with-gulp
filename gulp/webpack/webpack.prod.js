/*
              _                      _                          _
__      _____| |__  _ __   __ _  ___| | __  _ __  _ __ ___   __| |
\ \ /\ / / _ \ '_ \| '_ \ / _` |/ __| |/ / | '_ \| '__/ _ \ / _` |
 \ V  V /  __/ |_) | |_) | (_| | (__|   <  | |_) | | | (_) | (_| |
  \_/\_/ \___|_.__/| .__/ \__,_|\___|_|\_\ | .__/|_|  \___/ \__,_|
                   |_|                     |_|

Webpack Prod configuration.
*/

let path      = require("path"),
    webpack   = require("webpack"),
    config    = require("../config");

let PLUGINS = require("./plugins/plugins");

module.exports = {
  mode: "production",
  output: {
    filename: "[name].js",
  },
  module: {
    rules: [
      // {
      //   enforce: "pre",
      //   test: /\.js$/,
      //   loader: "eslint-loader",
      //   query: {
      //     configFile: "./.eslintrc.js",
      //     fix: true
      //   }
      // },
      {
        test: /.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: "mustache-loader"
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2
        }
      }
    }
  },
  resolve: {
    alias: {
      templates: path.resolve(__dirname, "../../src/templates")
    }
  },
  plugins: PLUGINS.prodPlugins(),
	devtool: "source-map"
};

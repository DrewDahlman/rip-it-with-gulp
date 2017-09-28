let path      = require("path"),
    webpack   = require("webpack"),
    config    = require("../config");

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
      }
    ],
    rules: [ {
        test: /\.html$/,
        // loader: 'mustache-loader'
        // loader: 'mustache-loader?minify'
        loader: 'mustache-loader?{ minify: { removeComments: true } }'
        // loader: 'mustache-loader?noShortcut'
    } ]
  },
  plugins: [
		new webpack.ProvidePlugin({
			jQuery: "jquery",
			$: "jquery"
		}),
    new webpack.ProvidePlugin({
      Mustache: "mustache"
    }),
		new webpack.optimize.UglifyJsPlugin({
		  sourceMap: true
		})
	],
	devtool: "source-map"
};

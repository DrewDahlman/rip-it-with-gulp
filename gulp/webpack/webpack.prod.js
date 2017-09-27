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
    ]
  },
  plugins: [
		new webpack.ProvidePlugin({
			jQuery: "jquery",
			$: "jquery"
		}),
		new webpack.optimize.UglifyJsPlugin({
		  sourceMap: true
		})
	],
	devtool: "source-map"
};

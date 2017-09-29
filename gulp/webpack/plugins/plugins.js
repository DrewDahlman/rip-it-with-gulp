let webpack = require('webpack');

let ModernizrWebpackPlugin = require('modernizr-webpack-plugin'),
    modernizr_config = require('../../../node_modules/modernizr/lib/config-all.json');

module.exports = {
  devPlugins: () => {
    let plugins = [
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
    ];
    return plugins;
  },
  prodPlugins: () => {
    let plugins = [
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
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
      })
    ];
    return plugins;
  }
};

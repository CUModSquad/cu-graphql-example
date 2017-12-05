const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BabiliPlugin = require('babili-webpack-plugin');

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new BabiliPlugin(),
  ],
});

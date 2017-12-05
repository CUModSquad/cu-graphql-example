const path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader', 'awesome-typescript-loader?declaration=false'],
        exclude: ['/node_modules/', nodeModulesPath],
        // query: {
        //   declaration: false,
        // },
      },
      {
        test: /\.(jsx?)$/,
        loader: 'babel-loader',
        exclude: ['/node_modules/', nodeModulesPath],
      },
    ],
  },
};

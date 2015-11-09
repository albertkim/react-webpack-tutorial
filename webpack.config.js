'use strict';

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    './src/index.js'
  ],

  output: {
    path: __dirname + '/build',
    filename: 'index.js',
    publicPath: ''
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel?presets[]=react"]
      },
      {
        test: /\.html$/,
        loaders: ["html"]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};

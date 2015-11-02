'use strict';

module.exports = {
  context: __dirname + '/src',

  entry: [
    'webpack/hot/dev-server',
    './index.js'
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
    ]
  }
};

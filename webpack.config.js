var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),

  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /src\/.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /src\/.jsx$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  }
};

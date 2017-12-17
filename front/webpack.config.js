const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dev'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dev'),
    inline: true,
    hot: true,
    port: 8000
  }
}

module.exports = config;
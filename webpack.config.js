const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
    libraryTarget: 'umd',
    library: 'rstate',
    umdNamedDefine: true,
    libraryExport: 'default',
  },
};

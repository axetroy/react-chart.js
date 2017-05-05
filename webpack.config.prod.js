const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'src', 'react-chart.jsx'),
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'react-chart.js',
    libraryTarget: 'umd'
  },
  externals: {
    react: 'react',
    'lodash.isequal': 'lodash.isequal',
    'lodash.debounce': 'lodash.debounce',
    'chart.js': 'chart.js'
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'example')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ]
};

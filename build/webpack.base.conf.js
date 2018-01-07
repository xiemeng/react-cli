var path = require('path')
var utils = require('./utils')
var config = require('../config')
var urlPublicPath = process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: ['babel-polyfill','./src/main.jsx']
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      '@': resolve('src'),
      'components': resolve('src/components'),
      'pages': resolve('src/pages'),
      'assets': resolve('src/assets'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      },
      {
          test: /\.jsx$/,
          loader: 'babel-loader',
          include: [resolve('src')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 80000,
          name: '[name].[hash:7].[ext]',
          outputPath: 'static/img/',
          publicPath: urlPublicPath
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[hash:7].[ext]',
          outputPath: 'static/media/',
          publicPath: urlPublicPath
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[hash:7].[ext]',
          outputPath: 'static/font/',
          publicPath: urlPublicPath
        }
      }
    ]
  }
}

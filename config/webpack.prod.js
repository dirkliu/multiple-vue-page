var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base')
var path = require('path')

module.exports = merge(baseWebpackConfig, {
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: '[name]/[name].js',
    //对所有资源设置publicPath
    publicPath:'/'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      }
    })
  ]
})

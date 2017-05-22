var path = require('path')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base')

var webpackConfig = merge(baseWebpackConfig, {
  output: {
    path: path.resolve(__dirname),
    filename: '[name]/[name].js',
    //对所有资源设置publicPath
    publicPath:'/'
  },

  devServer: {
    contentBase: path.join(__dirname),
    port: 80,
    open: true,
    inline: true
  }
})

module.exports = webpackConfig

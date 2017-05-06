var path = require('path')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base')

var webpackConfig = merge(baseWebpackConfig, {
  devServer: {
    contentBase: path.join(__dirname,'../'),
    port: 80,
    open: true,
    inline: true
  }
})

module.exports = webpackConfig

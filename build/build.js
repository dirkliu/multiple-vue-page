var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var rm = require('rimraf')

var baseWebpackConfig = require('./webpack.base')

var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');

rm('../dist', err => {
  if (!err) {
    webpack(merge(baseWebpackConfig, {
      output: {
        path: path.resolve(__dirname, "../dist"),
        filename: '[name]/[name][chunkhash].js',
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
        }),

        new OptimizeCSSPlugin()
      ]
    }), (err, stats) => {
      console.log('stats:', stats)
      console.log('err:', err)
    })
  }
})
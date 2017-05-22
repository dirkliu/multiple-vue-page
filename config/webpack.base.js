var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var configJson = require('./config.json');

module.exports = {
  entry: {
    'index': './index/main',
    'activity': './activity/main'
  },

  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader',
        {
          loader: 'px2rem-loader',
          query:{
            remUnit: 36,
            remPrecision: 8
          }
        }
      ]
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
      test: /.vue$/,
      loader: "vue-loader"
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
        query: {
          limit: 10000,
          name: '[path][name].[hash:7].[ext]'
          //只对图片资源设置publicPath
          //publicPath: '/'
        }
    }]
  },

  plugins: configJson.map( (item)=> {
    return new HtmlWebpackPlugin(item)
  }).concat([
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
  ])
}

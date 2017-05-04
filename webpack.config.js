var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    'index': './index/main',
    'activity': './activity/main'
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name]/[name].js'
    //对所有资源设置publicPath
    // publicPath:'/'
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
          name: '[path][name].[hash:7].[ext]',
          //只对图片资源设置publicPath
          publicPath: '/'
        }
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './index.html',
      chunks:['index']
    }),

    new HtmlWebpackPlugin({
      filename: './activity.html',
      template:'./activity/index.html',
      chunks: ['activity']
    })
  ],

  devServer: {
    contentBase: path.join(__dirname),
    port: 80,
    open: true,
    inline: true
  }
}

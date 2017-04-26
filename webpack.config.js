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
  },

  module: {
    rules: [{
      test: /\.css$/,
      loader: "style-loader!css-loader"
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
          name: 'img/[name].[hash:7].[ext]'
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

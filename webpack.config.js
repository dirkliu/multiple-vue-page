var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './views/index/main.js',

  output: {
    path: 'dist',
    filename: '[name].js'
  },

  module: {
    rules: [
      {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    },{
      test: /.vue$/,
      loader: "vue-loader"
    }
  ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: 'pages/index.html'
    })
  ],

  devServer: {
    contentBase: path.join(__dirname),
    port: 80,
    open: true,
    inline: true
  }
}

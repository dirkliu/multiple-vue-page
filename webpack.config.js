var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    'index': './views/index/main',
    'activity': './views/activity/main'
  },

  output: {
    path: path.resolve(__dirname, "dist"),
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
      template: 'pages/index.html',
      chunks:['index']
    }),

    new HtmlWebpackPlugin({
      filename: './activity.html',
      template:'pages/activity.html',
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

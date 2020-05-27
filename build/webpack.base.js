var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var buildJson = require('./build.json')

function getEntries(entries) {
    var entry = {};
    entries.forEach(item => {
        entry[item] = './src/' + item + '/main'
    })
    return entry
}

module.exports = {
    entry: getEntries(buildJson),

    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", {
                    loader: 'px2rem-loader',
                    query: {
                        remUnit: 36,
                        remPrecision: 8
                    }
                }]
            })
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: ['vue-style-loader', 'css-loader'],
                    scss: ['vue-style-loader', 'css-loader', 'sass-loader']
                }
            }
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

    plugins: buildJson.map(item => new HtmlWebpackPlugin({
        filename: './' + item + '.html',
        template: './src/' + item + '.html',
        chunks: [item],
        inject: true,
        "minify": {
            "removeComments": true,
            "collapseWhitespace": true,
            "removeAttributeQuotes": true
        }
    })).concat([
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new ExtractTextPlugin({
            filename: '[name]/[contenthash].[id].css'
        })
    ])
}

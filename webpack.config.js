var path = require('path')
var webpack = require('webpack')
module.exports = {
    entry:{ //入口文件
        'build' : './src/main.js'
    }, 
    output: {
        path: path.resolve(__dirname, './dist'), //输出路径
        publicPath: '/dist/',
        filename: '[name].js' //输出文件名
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules'),
    },
    resolve: {
        extensions: ['', '.js', '.vue']
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        },{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        },{
            test: /\.json$/,
            loader: 'json'
        },{
            test: /\.html$/,
            loader: 'vue-html'
        },{
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'url',
            query: {
                limit: 10000,
                name: '[name].[ext]?[hash]'
            }
        }]
    },
    devServer: {
        historyApiFallback: true,
        host : '192.168.1.172',
        port: 3000,
        noInfo: true
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ])
}
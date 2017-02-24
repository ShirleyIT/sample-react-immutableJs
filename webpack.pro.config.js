'use strict';

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = {
    entry: [
        './src/app/index.jsx'
    ],
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'dist'),
        filename: '[chunkhash].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders : [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components|public\/)/,
            loader: "babel"
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            exclude: /(node_modules|bower_components)/,
            loader: "file"
        }, {
            test: /\.(woff|woff2)$/,
            exclude: /(node_modules|bower_components)/,
            loader: "url?prefix=font/&limit=5000"
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            exclude: /(node_modules|bower_components)/,
            loader: "url?limit=10000&mimetype=application/octet-stream"
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            exclude: /(node_modules|bower_components)/,
            loader: "url?limit=10000&mimetype=image/svg+xml"
        }, {
            test: /\.gif/,
            exclude: /(node_modules|bower_components)/,
            loader: "url-loader?limit=10000&mimetype=image/gif"
        }, {
            test: /\.jpg/,
            exclude: /(node_modules|bower_components)/,
            loader: "url-loader?limit=10000&mimetype=image/jpg"
        }, {
            test: /\.png/,
            exclude: /(node_modules|bower_components)/,
            loader: "url-loader?limit=10000&mimetype=image/png"
        }, {
            test: /[\/\\]src[\/\\].*\.css/,
            exclude: /(node_modules|bower_components|public\/)/,
            loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
        }, {
            test: /[\/\\]src[\/\\].*\.scss/,
            exclude: /(node_modules|bower_components|public\/)/,
            loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
        }, {
            test: /[\/\\](node_modules|global)[\/\\].*\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css')
        }]
    },
    plugins: [
        new WebpackCleanupPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                drop_console: true,
                drop_debugger: true
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new ExtractTextPlugin('[contenthash].css', {
            allChunks: true
        }),
        new webpack.optimize.DedupePlugin()
    ]
};

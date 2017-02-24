"use strict";

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const Config = require('./webpack.const');

module.exports = {
	context: __dirname,
	entry: [
		'react-hot-loader/patch',
		'./src/app/index.jsx'
	],
	devtool: 'source-mape',
	output: {
		publicPath: '/',
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [{
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
			test: /\.scss$/,
			exclude: /[\/\\](node_modules|bower_components|public\/)[\/\\]/,
			loaders: [
				'style',
				'css',
				'postcss',
				'sass'
			]
		}, {
			test: /\.css$/,
			exclude: /[\/\\](node_modules|bower_components|public\/)[\/\\]/,
			loaders: [
				'style?sourceMap',
				'css?modules'
			]
		}]
	},
	devServer: {
		contentBase: "./",
		// do not print bundle build stats
		noInfo: true,
		// enable HMR
		hot: true,
		// embed the webpack-dev-server runtime into the bundle
		inline: true,
		// serve index.html in place of 404 responses to allow HTML5 history
		historyApiFallback: true,
		port: Config.PORT,
		host: Config.HOST
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new DashboardPlugin(),
	    new webpack.optimize.DedupePlugin(),
		new HtmlWebpackPlugin({
			template: './src/html/template.html'
		})
	]
};

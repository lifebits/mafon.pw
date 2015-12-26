'use strict';

const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development',
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    ngAnnotatePlugin = require('ng-annotate-webpack-plugin'),
    path = require('path');

const APP = path.join(__dirname, '/src');

module.exports = {

    context: APP,

    entry: {
        app: './app'
    },

    output: {
        path: __dirname + '/public',
        publicPath: '/public/',
        filename: '[name].js'
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: [/node_modules/] },
            { test: /\.html$/, loader: 'ng-cache?prefix=[dir]/[dir]' },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!resolve-url!sass?sourceMap') },
            { test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/, loader: 'file?name=[path][name].[ext]?[hash]' },

            {test: /isotope\-|fizzy\-ui\-utils|desandro\-|masonry|outlayer|get\-size|doc\-ready|eventie|eventemitter/, loader: 'imports?define=>false&this=>window'}
        ],
        noParse: [
            /[\/\\]node_modules[\/\\]angular[\/\\]angular/,
            /[\/\\]node_modules[\/\\]angular-ui-router/,
            /vendor[\/\\]angular-soundmanager2/
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),

        new ExtractTextPlugin("style.css"),

        new ngAnnotatePlugin({
            add: true
            // other ng-annotate options here
        })
    ],

    //devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,
    devtool: 'cheap-inline-module-source-map',

    devServer: {
        hot: true
    }

};
/*
if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings:     false,
                drop_console: true,
                unsafe:       true
            }
        })
    );
}
    */
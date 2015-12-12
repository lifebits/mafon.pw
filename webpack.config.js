'use strict';

let webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    //ngAnnotatePlugin = require('ng-annotate-webpack-plugin'),
    path = require('path'),
    APP = path.join(__dirname, '/src');

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
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.html$/, loader: 'ng-cache?prefix=[dir]/[dir]' },
            //{ test: /\.css$/, loader: 'style-loader!css-loader'}
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!resolve-url!sass?sourceMap') },
            { test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/, loader: 'file?name=[path][name].[ext]?[hash]' }
        ],
        noParse: [
            /[\/\\]node_modules[\/\\]angular[\/\\]angular/,
            /[\/\\]node_modules[\/\\]angular-ui-router/
        ]
    },

    plugins: [
        new ExtractTextPlugin("style.css"),
        /*new webpack.optimize.DedupePlugin(),
        new ngAnnotatePlugin({
            add: true,
            // other ng-annotate options here
        })*/
    ],

    devtool: 'cheap-inline-module-source-map',

    devServer: {
        hot: true
    }
};
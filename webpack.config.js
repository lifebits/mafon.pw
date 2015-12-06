'use strict';

let webpack = require('webpack'),
    path = require('path'),
    APP = path.join(__dirname, '/src');

module.exports = {

    context: APP,

    entry: {
        app: './app'
    },

    output: {
        path: __dirname + '/public',
        filename: '[name].js'
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.html$/, loader: 'ng-cache?prefix=[dir]/[dir]' },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ],
        noParse: [
            /[\/\\]node_modules[\/\\]angular[\/\\]angular/
        ]
    }

};
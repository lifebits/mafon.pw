'use strict';

let webpack = require('webpack');

module.exports = {

    context: __dirname + '/src',

    entry:   {
        app: './app'
    },

    output: {
        path: __dirname + '/public',
        filename: '[name].js'
    },

    module: {
        loaders: [{
            test:   /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }],
        noParse: [
            /[\/\\]node_modules[\/\\]angular[\/\\]angular\.js$/
        ]
    }

};
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname + '/src/VueProm.vue'),
    output: {
        path: path.resolve(__dirname + '/dist/'),
        filename: 'vue-prom.js',
        library: 'vue-prom',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
};
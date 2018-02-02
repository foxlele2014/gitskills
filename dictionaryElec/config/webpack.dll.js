const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const config = {
    entry: {
        dll: [
            'react',
            'react-dom',
            'react-router-dom',
            'react-redux',
            'redux',
            'whatwg-fetch',
            'classnames',
            'antd',
            'prop-types'
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve('public'),
        library: '[name]'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(
                process.env.NODE_ENV || 'production'
            )
        }),
        new webpack.DllPlugin({
            context: __dirname,
            name: '[name]',
            path: path.join(__dirname, 'manifest.json')
        }),
        new UglifyJsPlugin()
    ]
};

module.exports = config;

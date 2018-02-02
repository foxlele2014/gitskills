/*
* @Author: limin
* @Date:   2017-12-19 14:27:29
* @Last Modified by:   limin
* @Last Modified time: 2017-12-29 18:36:11
*/
/**
 * __dirname是基于使用它的文件的位置而言的
 * 所以要抽取公共路径的话，可以抽取每个文件的前缀作为resolve的第一个参数
 * hmr http://www.css88.com/doc/webpack2/guides/hmr-react/
 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const commonPath = 'resource';
const alias = ['assets', 'components', 'config', 'pages', 'route', 'utils'];
const getAliasPath = () => {
    return alias.map((opt, i) => {
        return path.resolve(commonPath, opt);
    });
};
const getAliasObj = () => {
    let obj = {};
    const aliasPath = getAliasPath();
    for (let i = 0; i < aliasPath.length; i++) {
        obj[`@${alias[i]}`] = aliasPath[i];
    }
    return obj;
};

const config = {
    entry: [
        path.resolve('resource/renderer.js'),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve('public'),
    },
    devtool: 'eval-source-map',
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.jsx', '.less'],
        alias: getAliasObj()
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                //这里是仅仅吗
                exclude: [path.resolve('node_modules')],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react'],
                            plugins: [
                                'transform-runtime',
                                'syntax-dynamic-import',
                                'preval',
                                ['import',{ "libraryName": "antd", "libraryDirectory": "es", "style": "css" }] // `style: true` 会加载 less 文件]
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader?name=images/[name]-[hash].[ext]',
                        options: {}
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                use: [
                    {
                        loader: 'file-loader?name=fonts/[name]-[hash].[ext]',
                        options: {}
                    }
                ]
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(
                process.env.NODE_ENV || 'development'
            )
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./manifest.json')
        })
    ]
};

module.exports = config;

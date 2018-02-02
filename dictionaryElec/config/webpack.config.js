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
        'react-hot-loader/patch', // 开启react代码的模块热替换（HMR）
        'webpack-dev-server/client?http://localhost:8181',
        // 为webpack-dev-server的环境打包好运行代码
        // 然后连接到指定服务器域名与端口
        'webpack/hot/only-dev-server'
        // 为热替换（HMR）打包好运行代码
        // only- 意味着只有成功更新运行代码才会执行热替换（HMR）
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve('public'),
        publicPath: '/'
        // 对于热替换（HMR）是必须的，让webpack知道在哪里载入热更新的模块（chunk）
    },
    devtool: 'eval-source-map',
    devServer: {
        hot: true,
        contentBase: path.resolve('public'), // 输出文件的路径
        compress: true
        // port: 9000
    },
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
                                'react-hot-loader/babel' ,// 开启react代码的模块热替换（HMR）
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
        // 开启全局的模块热替换（HMR）
        new webpack.HotModuleReplacementPlugin(),
        // 当模块热替换（HMR）时在浏览器控制台输出对用户更友好的模块名字信息
        new webpack.NamedModulesPlugin(),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(
                process.env.NODE_ENV || 'development'
            )
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./manifest.json')
        })
        // new HtmlWebpackPlugin({
        //     title:'elec-dictionary',
        //     filename:'../resource/index.html',

        // })
    ]
};

module.exports = config;

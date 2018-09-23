const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    // 开发模式设置
    mode: 'development',
    // 入口
    entry: './src/index.js',
    // 出口
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // module
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.png|.jpg /,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8 * 1024
                    }
                }
            },
            {
                test: /\.html/,
                use: 'html-withimg-loader'
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: path.resolve(__dirname, 'src/ts'),
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    // resolve
    resolve: {
        // 定义后缀名
        extensions: ['.js', '.css', '.vue'],
        // 路径别名
        alias: {
            // bootstrap: 'bootstrap/dist/css/bootstrap.css'
        }
    },
    // devServer开发代理服务器，底层为express封装
    devServer: {
        port: 6666,
    },
    // externals
    externals: {},
    // 插件
    plugins: [
        // 提供全局的插件 不需要再次引入了
        // new webpack.ProvidePlugin({
        //   '$':'jquery'
        // }),
        new MiniCssExtractPlugin({
            filename: 'my.css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}
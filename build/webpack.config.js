const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(__dirname, '../src/app.js')
    },
    output: {
        filename: '[name]@[hash].js',
        path: path.join(__dirname, '../dist')
    },
    module: {
        rules:[
            {
                test: /\.jsx$/,
                use: 'babel-loader',
                include: path.join(__dirname, '../src')
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: [
                    path.join(__dirname, '../node_modules')
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'a spa base on react',
            template: path.join(__dirname, '../index.html')
        })
    ]
}
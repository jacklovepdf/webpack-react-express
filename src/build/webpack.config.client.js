/**
 *
 * Created by chengyong.lin on 18/3/4.
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';

let config = {
  entry: {
    app: path.join(__dirname, '../client/app.js') //要打包的入口文件
  },
  output: {
    filename: '[name]@[hash].js', //打包压缩之后文件名
    path: path.join(__dirname, '../../dist'),  // 打包压缩之后文件的存放路径
    publicPath: '/public'  // 指定资源文件引用的目录, publicPath取决于你的网站根目录的位置，因为打包的文件都在网站根目录了，这些文件的引用都是基于该目录的。
  },
  resolve: {

  },
  module: {
    rules: [
      // {
      //   enforce: 'pre', //编译之前强制执行
      //   test: /.(js|jsx)$/,
      //   loader: 'eslint-loader',
      //   exclude: [
      //     path.join(__dirname, '../node_modules')
      //   ]
      // },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, '../node_modules')
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "spa web app",
      template: path.join(__dirname, '../client/template.html')
    })
  ]
};

if(isDev) { // webpack-dev-server配置
  config.entry = {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, '../client/app.js') //要打包的入口文件
    ]
  };
  config.devServer = {
    host: '0.0.0.0',
    port: 8888,
    contentBase: path.join(__dirname, '../../dist'),
    overlay: {
      errors: true
    },
    hot: true,
    historyApiFallback: {
      index: '/public/index.html'
    },
    publicPath: '/public'
  };
  config.devtool = 'inline-source-map';
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}
module.exports = config;

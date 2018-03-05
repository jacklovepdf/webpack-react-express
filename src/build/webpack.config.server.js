/**
 * 打包出来的js代码运行在服务器端（nodejs）
 * Created by chengyong.lin on 18/3/4.
 */

const path = require('path');

module.exports = {
  target: 'node', // webpack打包出来的js代码是运行在什么环境（平台）上的
  entry: {
    app: path.join(__dirname, '../client/server-entry.js') //要打包的入口文件
  },
  output: {
    filename: 'server-entry.js', //打包压缩之后文件名
    path: path.join(__dirname, '../../dist'),  // 打包压缩之后文件的存放路径
    publicPath: '',  // 指定资源文件引用的目录, publicPath取决于你的网站根目录的位置，因为打包的文件都在网站根目录了，这些文件的引用都是基于该目录的。
    libraryTarget: 'commonjs2' // 打包出来的js包遵循的模块规范；
  },
  module: {
    rules: [
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
  }
};


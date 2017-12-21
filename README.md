# webpack-react-demo
some tips and practice to webpack

1. webpack definition
    webpack is a static module bundler for modern JavaScript applications. 

2. entry
    An entry point indicates which module webpack should use to begin building out its internal dependency graph. 

3. output
    The output property tells webpack where to emit the bundles it creates and how to name these files.

4. Loaders
    Loaders enable webpack to process more than just JavaScript files (webpack itself only understands JavaScript).
    
    At a high level, loaders have two purposes in your webpack config. They work to:
    
    Identify which file or files should be transformed by a certain loader (with the test property).
    Transform those files so that they can be added to your dependency graph (and eventually your bundle). (use property)
    
```javascript
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const webpack = require('webpack'); //to access built-in plugins
    const config = {
          module: {
            rules: [
              { test: /\.txt$/, use: 'raw-loader' }
            ]
          },
    };
    
    module.exports = config;
```

5. Plugins

    While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks. Plugins range from bundle optimization and minification all the way to defining environment-like variables. 
The plugin interface is extremely powerful and can be used to tackle a wide variety of tasks. In order to use a plugin, you need to require() it and add it to the plugins array. Most plugins are customizable through options. 
Since you can use a plugin multiple times in a config for different purposes, you need to create an instance of it by calling it with the new operator.

```javascript
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const webpack = require('webpack'); //to access built-in plugins
    const config = {
      plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template: './src/index.html'})
      ]
    };
    
    module.exports = config;
```






2.为什么要使用绝对路径


3.output 中的path宇publicPath的区别


4.webpack --config build/webpack.config.js
options config: 指定webpack的配置文件；


5. babel的配置文件

{
  "presets": [
    ["es2015", { "loose": true }],
    "stage-1",
    "react"
  ],
  "plugins": ["transform-decorators-legacy", "react-hot-loader/babel"]
}

presets指定babel支持的语法


6. rimraf 一个基于nodejs的包，用于删除文件或者文件夹；



7. 客户端渲染与服务器端渲染




 

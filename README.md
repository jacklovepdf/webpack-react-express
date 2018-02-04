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



8. AMD , CMD 和commonjs


9. cross-env

10. memory-fs
内存读写


11. webpack-dev-server
    DevServer启动的服务提供的资源并没有打包出来放在此盘中，而是存在内存中。
for more information, you can read the official doc。https://webpack.js.org/configuration/dev-server/




12. eslint



13. 关于editorconfig
  editorconfig的作用是帮助开发着在不同的编辑器或者IDE之间定义和维护一致的代码风格。

14. 提交代码之前进行代码风格检测



15.webpack默认情况下只能识别js文件，为了能够自动识别jsx文件，我们可以添加下面的配置，使得webpack能够自动识别jsx文件。

```
    resolve: {
      extensions: ['.js', '.jsx']
    },
```


16. https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy

17. react context


17. https://babeljs.io/docs/plugins/preset-stage-1/

18. template string

19. body-parser

  Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
  The bodyParser object exposes various factories to create middlewares. 
  All middlewares will populate the req.body property with the parsed body when the Content-Type request header matches the type option, 
  or an empty object ({}) if there was no body to parse, the Content-Type was not matched, or an error occurred.
  https://www.cnblogs.com/chyingp/p/nodejs-learning-express-body-parser.html

20. express-session


21. query-string








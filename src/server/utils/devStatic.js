/**
 * Created by chengyong.lin on 17/12/29.
 */

'use strict';
const axios = require('axios');
const webpack = require('webpack');
const path = require('path');
const memoryFs = require('memory-fs'); // 内存读写
const ReactDOMServer = require('react-dom/server');
const proxy = require('http-proxy-middleware');
const serverConfig = require('../../build/webpack.config.server');

// 获取本地webpack-dev-server中提供的实时文件
const getTemplte = () => {
    return new Promise((resolve, reject)=>{
        axios.get('http://127.0.0.1:8888/public/index.html')
            .then((res)=>{
                resolve(res.data)
            })
            .catch((err)=>{
                reject(err)
            })
    })
};


//获取server端渲染的bundle(template)
const Module = module.constructor;
const mfs = new memoryFs;
const serverCompiler = webpack(serverConfig);
serverCompiler.outputFileSystem = mfs;
let serverBundle;
serverCompiler.watch({}, (err, status) => {
    if(err){
        throw err
    }
    status = status.toJson();
    status.errors.forEach(function (err) {
        console.error(err);
    });
    status.warnings.forEach(function (warning) {
        console.warn(warning);
    });

    const bundlePath = path.join(
        serverConfig.output.path,
        serverConfig.output.filename
    );
    const bundle = mfs.readFileSync(bundlePath, 'utf-8'); //string
    const m = new Module();
    m._compile(bundle, 'server-entry.js');
    serverBundle = m.exports.default;
});

module.exports = function (app) {
    // 提供静态资源
    app.use('/public', proxy({
        target: 'http://localhost:8888'
    }));
    // 提供页面
    app.get('*', function (req, res) {
        getTemplte().then((template) =>{
            const content = ReactDOMServer.renderToString(serverBundle);
            const resContent = template.replace("<server></server>", content);
            res.send(resContent);
        })
    });
};

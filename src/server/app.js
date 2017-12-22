/**
 * Created by chengyong.lin on 17/12/21.
 */

'use strict';

const express = require('express');
const path = require('path');
const ReactDOMServer = require('react-dom/server');
const serverTemplate = require('../../dist/app.server').default; //warning: require module which export
const fs = require('fs');

const app = express();
const clientHtmlString = fs.readFileSync(path.join(__dirname, '../../dist/index.html'), 'utf8');

//中间件
app.use('/public', express.static(path.join(__dirname, '../../dist')));

app.get('*', function (req, res) {
    console.log("serverTemplate====>", serverTemplate);
    const serverHtmlString = ReactDOMServer.renderToString(serverTemplate);

    console.log("serverHtmlString=====>", serverHtmlString);
    res.send(clientHtmlString.replace('<server></server>', serverHtmlString));
});

app.listen(8088, function () {
    console.log("server is listening on 8088");
});
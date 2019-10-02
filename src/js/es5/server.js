"use strict";

// 创建Web服务器
// 导入内置模块http
var http = require('http');

var fs = require('fs'); // 创建服务


var server = http.createServer(function (req, rep) {
  var url = req.url;
  console.log(url);

  if (url === '/index') {
    rep.end(fs.readFileSync('dist/index.html'));
  } else if (url === '/login') {
    rep.end(fs.readFileSync('dist/login.html'));
  } else if (url === '/register') {
    rep.end(fs.readFileSync('dist/register.html'));
  } else {
    rep.end(fs.readFileSync('dist/404.html'));
  }
}).listen(8888, function () {
  console.log('web is start');
});
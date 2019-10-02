// 创建Web服务器
// 导入内置模块http
let http = require('http');
let fs = require('fs');

// 创建服务
let server = http.createServer((req, rep) => {
    let url = req.url;
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

}).listen(8888, () => { 
    console.log('web is start');
});
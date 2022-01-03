// node 내부 모듈(http, fs, url, path) : 번들링 되어있는 모듈이다.
// fs 모듈이란? 파일 처리와 관련된 전반적인 작업을 하는 모듈
const http = require('http');
const fs = require('fs'); // file system
const app = http.createServer(function(request,response){
  let url = request.url;
  if(request.url == '/'){
    url = '/index.html';
  } else if(request.url == '/blog'){
    url = '/blog.html'
  } else if(request.url == '/favicon.ico'){
    return response.writeHead(404);
  } else {
    response.writeHead(404);
    response.end('Not found');
  }
  response.writeHead(200);
  response.end(fs.readFileSync(__dirname + url));
});
app.listen(3000);
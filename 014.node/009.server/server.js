const http = require("http");

// request/response
http.createServer((req, res) => {
  // 라우팅 : 요청에 맞게 분기 처리 하는 것
  if(req.url === '/') {
    res.writeHead(200); // status code (error == 404)
    res.end('main url');
  } else if(req.url === '/upload') {
    res.writeHead(200);
    res.end('upload url');
  } else if(req.url === '/delete') {
    res.writeHead(200);
    res.end('delete url');
  } else {
    res.writeHead(404);
    res.end('Not found!');
  }
}).listen(3000, () => {
  console.log('3000번 포트 서버 접속 완료.');
})
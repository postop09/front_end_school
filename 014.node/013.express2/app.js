const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  console.log('get으로 /페이지에 요청이 들어왔습니다.');
  res.send('<h1>hello world!</h1>');
});
app.get('/blog', (req, res, next) => {
  console.log('get으로 /페이지에 요청이 들어왔습니다.');
  res.send('<h1>hello world!</h1><p>blog</p>');
});
app.get('/about', (req, res, next) => {
  console.log('get으로 /페이지에 요청이 들어왔습니다.');
  res.send('<h1>hello world!</h1><p>about</p>');
});
app.get('/blog/1', (req, res, next) => {
  console.log('get으로 /페이지에 요청이 들어왔습니다.');
  res.send('<h1>hello world!</h1><p>one</p>');
});
app.listen(8080);
//함수 선언문: 함수이름 사용
// '호이스팅'에 의해서 실행된다.
console.log(add(10, 20));
function add(x, y) {
  return x + y;
}

// 함수 표현식: 함수를 변수에 넣어서 사용.
// 함수가 아닌 '이름'으로 선언하면 '호이스팅'이 일어나지 않는다.
console.log(sum(10, 20));
let sum = function (x, y) {
  return x + y;
}








let c = console.log
let d = console.dir
function 다찍어(data, log, dir) {
  console.log(data);
  console.dir(data);
}


// 화살표 함수
let q = (a, b) => a + b
q(10, 50)
// 똑같다.
let q = function(a, b) {
  return a + b;
}

// 여러줄 일 때는 중괄호 사용.
let q = (a, b) => {
  a + b
}
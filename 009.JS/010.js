// 객체(Object)

let person = {
  //key: value
  name: '이호준',
  age: 10,
  height : 30,
  weight : 40,
  이력 : {'첫번째직장' : '하나', '두번째직장' : '둘'},
  10: 100
}
// error가 나는 것과 나지 않는 것을 구분
person.name
person['name']
person[name] // undefined
person'name' // error

person[10]
person['10']
person.10 // error


Object.keys(person)
Object.values(person)
Object.entries(person) // [key, value], [key2, value2]... 둘 다 뽑아냄.







// 함수(Function)
/* 사용하는 이유 대표 3가지
  1. 재사용성
  2. 아키텍처 파악
  3. 유지보수
  ... 등
*/
function 함수하나() {
  let x = 10;
  console.log('함수하나 호출');
}
function 함수둘() {
  let x = 10;
  console.log('함수둘 호출');
}

// 함수 스코프(function scope)
// 안에서 선언된 것을 밖에서 호출하는 경우
function 함수하나() {
  let x = 10;
  console.log('함수하나 호출');
}
x // 호출되지 않는다.

// 밖에서 선언된 것을 안에서 호출하는 경우
let k = 10;
function viewk() {
  console.log(k);
}
function changek() {
  k += 10;
}
viewk()
changek()
viewk() // 호출된다.
// 선언의 수정도 가능하다
let k = 10;
function viewk(){
    console.log(k);
}
function changek(){
    let k = 20;
    console.log(k);
}
viewk()
changek()
viewk()

// 블록 스코프(block scope), 
if (true) {
  let y = 10;
}
console.log(y) // 출력 안함.

let yy = 100
if (true) {
  let yy = 10;
  console.log(yy); //출력: 10
}
console.log(yy); // 출력: 100

let yy = 100
if (true) {
  const y = 10;
  console.log(y); // 출력: 10
}
console.log(y); // 출력 안함.

// 캡슐화: 독립적인 메모리 공간 (함수에서 극대화: 적어도 함수에서 만큼은!! var도 캡슐화)
// 추상화: 운전대 = 방향에 대한 추상화









// 매개변수(Parameter) : a, b(변수명) - 선언
// 전달인자/인자(Argument) : 10, 20(값) - 실행
function add(a, b) {
  return a + b;
}
add(10, 20);

let hello = function() {
  console.log('hello');
}

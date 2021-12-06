
// this: 함수를 호출하는 객체
function aboutThis() {
  console.log(this);
}
// 기본 전제: window가 aboutThis라는 함수를 호출한다.
// 전역 객체 내부(window)에서 aboutThis를 선언했고,
// console.log(this): aboutThis를 호출하는 객체는 window(전역 객체에서)이기 때문에
// console.log(this)는 window를 가리켜 실행시킨다.

let myObj = {
  val1 : 100,
  func1 : function() {console.log(this)}
}

myObj.func1();
// myObj가 func1 이라는 함수를 호출한다.
// console.log(this): func1을 호출하는 객체는 myObj이기 때문에,
// console.log(this)는 myObj를 가리켜 실행시킨다.
// val1과 finc1이 출력된다.





// 스코프
// 전역스코프, 함수스코프, 블록스코프
// 전역스코프: 어디서든 접근할 수 있는 공간(window)
var myVal = 'hohoho';
// 함수스코프: 함수 내부에서만 선언되어 밖에서는 사용할 수 없는 공간
function myFunc1() {
  let myVal2 = 'hahaha';
}





// 클로저(closure): 폐쇠된 공간의 데이터에 접근하기 위한 '테크닉'이다.
// 함수를 이용해 폐쇠된 공간을 만들 수 있다.
function myFunction1() {
  let val1 = 'hello'; // 함수 내부가 곧 closure 공간
}

function myFunction1() {
  let val1 = 'hello';
  return { // 객체를 반환 시키겠다.
    getVal1: function() { // getVal1가 키, 함수가 값. 
      return val1
    }
  }
}
let val1 = 'gg';
let result = myFunction1();
result.getVal1();
// 다른 변수에 영향을 미치는 것을 방지하기 위해 사용한다.
// 클로저 테크닉을 이용, getVal1을 통해서만 val1에 접근할 수 있게 한다.
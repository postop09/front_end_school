// this

/* this */
function sayName(){
  console.log(this.name); // name을 호출
}

var name = 'Hero';
// 전역으로 선언한 name 변수의 앞에는 window 가 생략되어 있습니다. 
// 때문에 window.name === "Hero" 가 성립합니다.
let peter = {
  name : 'Peter Parker',
  sayName : sayName
}
let bruce = {
  name : 'Bruce Wayne',
  sayName : sayName
}

sayName();
peter.sayName();  // 자기 자신을 호출한 객체의 'name': 즉, peter라는 변수의 name값을 호출
bruce.sayName();

/* sayName() 함수를 실행했을 때와 
peter, bruce 객체의 sayName 함수를 호출했을 때의 결과를 비교해 보세요 */

// 명의도용
// 내가 정의한 함수에서, 필요한 부분만 가져와서 쓰는 것.
// 브루스가 피터 이름 빌려서 피터 물건 쓰는 것
call();
apply();
bind();


// 별로 좋지않은 예시
let 호텔 = [{
  '이름' : '하나호텔',
  '위치' : '제주도 제주시 001',
  '가격' : {'A':50000, 'B':30000, 'C':15000},
  '방의개수' : 50,
  '예약자수' : 25,
  '남은방의개수' : function(){return this.방의개수 - this.예약자수}
},{
  '이름' : '둘호텔',
  '위치' : '제주도 제주시 002',
  '가격' : {'A':100000, 'B':60000, 'C':30000},
  '방의개수' : 100,
  '예약자수' : 30,
  '남은방의개수' : function(){return this.방의개수 - this.예약자수}
},{
  '이름' : '셋호텔',
  '위치' : '제주도 제주시 003',
  '가격' : {'A':80000, 'B':50000, 'C':30000},
  '방의개수' : 120,
  '예약자수' : 80,
  '남은방의개수' : function(){return this.방의개수 - this.예약자수}
}];
console.log(호텔[0]);
console.log(호텔[0]['남은방의개수']);
console.log(호텔[0]['방의개수']) = 10;





// closure: 아래 예제는 외우는 것을 추천함.
function 제곱(x) {
  function 승수(y) {
    return y ** x;
  }
  return 승수
}
// 제곱(2) = 승수(y ** 2)
제곱(2);
// 제곱(x)은 승수()의 값을 받는다 = 제곱(x)승수()
// 즉, 제곱(x)(y);
제곱(2)(10);

let 제곱2 = 제곱(2);
제곱2(10);





// new: 생성자 함수





// JSON
// 쌍 따옴표를 사용해야 한다.
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json = JSON.stringify(student);
console.log(json)

let user = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};

console.log(JSON.stringify(user, null, 4))


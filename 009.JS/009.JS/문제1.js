//> 10미만의 자연수에서 3과 5의 배수를 구하면 3,5,6,9이다. 이들의 총합은 23이다.
//1000미만의 자연수에서 3,5의 배수의 총합을 구하라.
let result = 0

for (let x = 0; x < 101; x++) {
  // console.log(x);
  if (x % 3 == 0) {
    // console.log(x)
    result += x
  }
  if (x % 5 == 0) {
    // console.log(x)
    result += x
  }
}

console.log(result);
//위와 같이 하게 되면 '공배수'가 포함되어 중첩으로 계산된다.
// ex) 15, 30, 45... 중첩되는 것.






let result = 0

for (let x = 0; x < 101; x++) {
  // console.log(x);
  if (x % 3 == 0 || x % 5 == 0) {
    // console.log(x)
    result += x // result = result + x
  }
}

console.log(result);
// &&는 둘 다 참일 경우 이므로, 15의 배수만 찾아서 더하게 됌.
// ||을 사용하는 것이 타당함.



// 주석이 없어도 읽힐 수 있는 코드 지향
false || true
true && false
!true
!((true && false) || (true && false))
let x = 10
!((x % 5 == 0 && x % 2 == 0) || (x / 2 == 5 && false))
let y = 10
// 에러는 잡아낸다.
let z = 3
(true && z % 3 == 0) || (z / 2 !== 5 && false) // !=!=: 잘못된 문법 검출

// 드모르간 법칙
// 연산 가장 앞에 부정(!)을 붙여주면, 각각의 인수에 부정/연산자 역전이 발생한다.
// 코드 최적화를 위해 종종 사용한다.
!(x || y) === (!x && !y)
!(x && y) === (!x || !y)
!(x + y) === (!x * !y)

// 3항연산자 대체 용법
true && '완료' || '미완료';

let age = 10
let accessAllowed = (age > 18) ? true : false;
// (연산이 'true'면) 전자(true)를 출력, 그렇지 않으면 후자(false)를 출력


// 자주 사용하는 형변환
123 + ''
'123'
!!true
true
!!'hojun'
true
!!''
false
!!1
true
!!0
false
!!undefined
false
!!NaN
false


'0' == 0
true
0 == ''
true
0 == '0'
true
false == 'false'
false
false == '0'
true
false == null
false
false == undefined
false
false == NaN
false
!!null
false
!!undefined
false
!!NaN
false








// 조건과 반복문
if (false) {
  console.log(1);
} else if(true) {
  console.log(2);
} else if(false) {
  console.log(3);
} 
if (true) {
  console.log(4);
}
if (false) {
  console.log(5);
} else if(true) {
  console.log(6);
} else if(false) {
  console.log(7);
} else {
  console.log(99);
}

// escape 문자: \
// \t
// \n
// \\
// \'
// \"
let score = 89;
let money = 100000;
if (score > 90) {
    console.log('mom : i\'m so happy')
}


let score = 89;
let money = 100000;

if (score >= 90) {
    console.log('mom : i\'m so happy');
    money += 1000000;
} else if (score > 80) {
    console.log('mom : i\'m so happy');
    money += 100000;
} else if (score > 70) {
    console.log('mom : i\'m happy');
    money += 10000;
} else if (score > 60) {
    console.log('mom : happy?');
    money += 10000;
} else {
    console.log('...');
}


switch(new Date().getDay()) {
  case 0:
      console.log('일요일!!');
      break;
  case 1:
      console.log('월요일!!');
      break;
  case 2:
      console.log('화요일!!');
      break;
  case 3:
      console.log('수요일!!');
      break;
  default:
      break;
}


//반복문
for (let i = 0; i < cars.length; i++) {
  console.log(i);
}

for (let i = 0; i < cars.length; i++) {
  //console.log(i);
  console.log(cars[i]);
}
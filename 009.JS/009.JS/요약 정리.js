/* 
**변수(Type)**
> Array(배열) 
  - 형태 : ['하나', '둘', '셋'], [100, 200, 300],
  - 호출 : 변수명, 변수명[0], 변수명[0][0] (변수명[index])
> String(문자열)
  - 형태 : 'abcde', "abcde", `abcde`
  - 호출 : 변수명, 변수명[0] (변수명[index])
> Number(숫자)
  - 형태 : 10, 10.123
  - 호출 : 변수명
> Boolean(논리값)
  - 형태 : true, false
  - 호출 : 변수명
> Object(객체)
  - 형태 : {
              "지역이름": "전국",
              "확진자수": 24889,
              "격리해제수": 23030,
              "사망자수": 438,
              "십만명당발생율": 48.0
            }
  - 호출 : 변수명, 변수명.지역이름, 변수명['지역이름'] (변수명.key, 변수명[key])
> undefine : undefine
> null : object
> NaN : number

**연산**
> 산술연산 : + - / * ** %
> 논리연산 : ! && ||
> 비교연산 : === !== == != > >= < <=
> 조건문 : if...else if...else, switch
> 반복문 : for, for in, for of, while, do while, forEach, break, continue
  - for
  for (let i = 0; i < 10; i++) {
    console.log(i)
  }
  - for of
  let a = [10, 20, 30, 40];
  for (let i of a) {
    console.log(i);
  }
  - for in
  let a = [10, 20, 30, 40];
  for (let i in a) {
    console.log(i);
  }
  - while
  let x = 0;
  while (x < 10) {
    console.log(x);
    x++;
  }
  - do while
  let x = 0;
  do {
    console.log(x);
    x++;
  } while (x < 10)
  - forEach
  let a = [10, 20, 30, 40];
  a.forEach(e => console.log(e2));
  - break
  for (let i = 0; i < 10; i++) {
    if (i == 5) {
      break;
    }
  }
  for (let i = 0; i < 10; i++) {
    if (i == 5) break;
    console.log(i);
  }
  - continue
  for (let i = 0; i < 10; i++) {
    if (i == 5) continue;
    console.log(i);
  }
  
**함수**
> 매개변수(parameter) : x, y
> 전달인자(argument) : 1, 2
  - 함수
  function add(x, y) {
      return x + y;
  }
  add(3, 5)
  - 콜백함수
  function add(x, y) {
      return x + y;
  }
  function mul(x, y) {
      return x * y;
  }
  function cal(a, b) {
      return a(10, 10) + b(10, 10);
  }
  cal(add, mul);
  - 화살표함수
  function add(x, y) {
      return x + y
  }

**객체**
> 선언
  - let(표준 변수값)
  - const(한 번 값을 할당하면 더는 값을 바꿀 수 없는 상수를 정의)
  - var(전역에서 사용할 변수값/현업에서 사용 비추천)
> 할당 : let value = 값
> 전개표현식 : ...
  add(하나, 둘, 셋)
  function add(...x) {
    return x;
  }
> 블록스코프 : 선언/할당값이 영향을 미치는 영역/범위
> 구문
> 리턴
> 인수 : 값
> (window.)console.log
> 디버깅 : 콘솔 오류를 확인하고, 잡아내는 행위
> this
> Statement : 표현식
  let x, y, z;
  x = 5;
  y = 6;
  z = x + y;
> 리터럴
> DOM : 문서를 찍어낼 수 있는 프린트 공장
> BOM
> 정규표현식
*/
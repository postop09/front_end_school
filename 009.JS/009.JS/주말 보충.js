/* 자바스크립트란?
> ‘웹페이지에 생동감을 불어넣기 위해’ 만들어진 프로그래밍 언어

엔진은 어떻게 동작하나요?
엔진이 어떻게 동작하는지 이해하려면 상당한 시간을 쏟아부어야 합니다. 하지만 기본 원리는 다음과 같이 간단합니다.

1. 엔진(브라우저라면 내장 엔진)이 스크립트를 읽습니다(파싱).
2. 읽어 들인 스크립트를 기계어로 전환합니다(컴파일).
3. 기계어로 전환된 코드가 실행됩니다. 기계어로 전환되었기 때문에 실행 속도가 빠릅니다.


ES6 => ES2015 (ECMAScript 2015)
ES7 => ES2016 (ECMAScript 2016)
ES8 => ES2017 (ECMAScript 2017)
ES9 => ES2018 (ECMAScript 2018)
...
ES12 => ES2021 (ECMAScript 2021)

서로 다른 스크립트여도 console.log(x)가 실행된다!!
<script src="a.js"></script>
<script>
console.log(x) // a.js에 x가 선언되어 있습니다.
</script>


'use strict';
최신 문법을 사용하기위해 활성화 시키는 선언
-현업에서는 사용하는 경우가 적다.


형변환
묵시적 변환 / 명시적 변환
parseInt("123z"): 가능
parseInt("z123"): 불가능


??????
null === undefined
false
null == undefined
true
null == 0
false
null > 0
false
null >= 0
true

* 피연산자에 undefined나 null 값이 오지 않도록 주의하자 

문자열로 변환되어 실행된다.
let a = '10'
let b = 100

if (!!a && !!b) {
  console.log(a +b)


*/
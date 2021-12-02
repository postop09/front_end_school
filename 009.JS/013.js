// in 연산자
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
0 in trees         // true를 반환합니다.
3 in trees         // true를 반환합니다.
(1 + 2) in trees   // true를 반환합니다. 연산자 우선 순위에 의하여 이 구문의 괄호는 없어도 됩니다.
6 in trees         // false를 반환합니다.
"bay" in trees     // false를 반환합니다. 당신은 배열의 내용이 아닌, 인덱스 값을 명시하여야 합니다.
"length" in trees  // true를 반환합니다. length는 Array(배열) 객체의 속성입니다.

// 미리 정의된 객체
"PI" in Math       // true를 반환합니다.
"P" + "I" in Math  // true를 반환합니다.

// 사용자가 정의한 객체
var myCar = {company: "Lamborghini", model: "Lamborghini Veneno Roadster", year: 2014};
"company" in myCar // true를 반환합니다.
"model" in myCar   // true를 반환합니다






// 재귀함수

// 1) 종료조건 체크
// 2) 반복문으로 구현할 수 있는 것은 재귀함수로 모두 구현 가능
// 3) 재귀함수로 구현 가능한 것은 반복문으로 '대부분'(복잡도를 증가시키면 모두) 구현 가능

// 팩토리얼, 리버스, 피보나치 3개는 외우고 있는게 좋다.

// 1) 팩토리얼
function factorial(n) {
  if(n <= 1) {
    return n;
  }
  return n * factorial(n - 1);
}
factorial(5);
// factorial(5) == 5 * factorial(4) == 5 * 24
// factorial(4) == 4 * factorial(3) == 4 * 6
// factorial(3) == 3 * factorial(2) == 3 * 2
// factorial(2) == 2 * factorial(1) == 2 * 1
// factorial(1) == 1





// 2) 시그마
function sigma(n) {
  if(n <= 1) {
    return n;
  }
  return n + sigma(n - 1);
}
sigma(5);
// sigma(5) == 5 + sigma(4) == 5 + 10
// sigma(4) == 4 + sigma(3) == 4 + 6
// sigma(3) == 3 + sigma(2) == 3 + 3
// sigma(2) == 2 + sigma(1) == 2 + 1
// sigma(1) == 1







// 3) 리버스(문자열 뒤집기)
function reverse(text) {
  text += '';
  if(text.lenght <= 1) {
    return text;
  }
  return reverse(text.slice(1)) + text[0];
}
reverse('hello');
// reverse('hello') == reverse('ello') + 'h' == 'olle' + 'h'
// reverse('ello') == reverse('llo') + 'e' == 'oll' + 'e'
// reverse('llo') == reverse('lo') + 'l' == 'ol' + 'l'
// reverse('lo') == reverse('o') + 'l' == 'o' + 'l'
// reverse('o') == 'o'





// 4) 피보나치 숫자
function Fibonacci(n) {
  if(n <= 2) {
    return n;
  }
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}
Fibonacci(4);
// Fibonacci(4) == Fibonacci(3) + Fibonacci(2) == 3 + Fibonacci(2) -> 이 전 공식에서 남은 것은 Fibonacci(3)밖에 없다. 그러므로 Fibonacci(2)를 다시 계산
// Fibonacci(3) == Fibonacci(2) + Fibonacci(1) == 2 + 1 == 3
// Fibonacci(2) == 2
// Fibonacci(1) == 1

// Fibonacci(2) 를 다시 계산 후...
// Fibonacci(4) == Fibonacci(3) + Fibonacci(2) == 3 + 2 == 5
// Fibonacci(2) == 2






// 5) 피보나치 캐시 (메모이제이션): 메모리 효율을 위해서 사용
// 호출되는 것이 메모리를 차지하고 있으므로 아래 기법을 적절히 믹싱해서 사용할 필요가 있음
// 반복문, 다이나믹 프로그래밍(메모이제이션(하향식), 타뷸레이션(상향식))
let fibo_cache = []
function fibo(n){
  if (n in fibo_cache) {
    return fibo_cache[n]
  }
  fibo_cache[n] = n < 2 ? n : fibo(n-2) + fibo(n-1)
  return fibo_cache[n]
}

// fibo_cache = [0, 1, 1, 2, fibo(2) + fibo(3)]
// fibo(4) == fibo_cache[4] == fibo(2) + fibo(3)
// fibo(2) == fibo_cache[2] == fibo(0) + fibo(1)
// fibo(0) == fibo_cache[0] == 0
// fibo(1) == fibo_cache[1] == 1
// fibo(3) == fibo_cache[3] == fibo(1) + fibo(2)
// fibo(1) == 1
// fibo(2) == 1






// 6) 콤마 찍기
function reverse(text) {
  text += '';
  if(text.lenght <= 1) {
    return text;
  }
  return reverse(text.slice(1)) + text(n - 1);
}






// 7) 익명 즉시 실행 함수
(function () {
  var a = 1;
  var b = 2;
  return a + b;
}());

// 8) 기명 즉시 실행 함수
(function foo() {
  var a = 3;
  var b = 5;
  return a * b;
}());

foo(); // ReferenceError: foo is not defined
// 어차피 실행하지 못해서 의미가 없음.
// 메모리 효율적으로 관리하기 위해 바로 실행해야 하는 것들을 즉시 실행함수로 관리
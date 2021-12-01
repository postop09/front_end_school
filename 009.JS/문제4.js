// 문제 1
let s = 'hello world';
let temp = ''
for (let i = 0; i < s.length; i++) {
  temp = s[i] + temp
}


// 문제 2
let array1 = [10, 20, 30, 10, 20, 30, 40, 10]
let result = 0
for (let i = 0; i < array1.length; i++) {
  result += array1[i]
}
console.log(result/array1.length)


// 문제 3
let s = '5, 4, 10, 2, 5'.split(',')
let result = 0
console.log(s)
for (let i = 0; i < s.length; i++) {
  result += +s[i];
}
console.log(result/s.length);

// '들어오는 값이 모호하다' 라고 느껴지면, parseInt 사용을 지향
let s = '5, 4, 10, 2, 5'.split(',')
let 합계 = 0
for (let i of s) {
  합계 += parseInt(i);
}
console.log(합계/s.length);
// 연산에는 리소스가 들어간다.


// 문제 4를 풀기위한 참고
// 각각의 문자열로 바꿔준 다음, 다시 숫자열로 변형 후 더해준다.
let 합계 = 0
for (let i of 123456789 + '') {
  합계 += parseInt(i);
}
// 문제 4



// 문제 5: 콤마 찍기
// 콤마 찍기 1
const n = 12345.6789;
const comma = n.toString()
  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

document.writeln(comma);

// 콤마 찍기 2
navigator.language
const n = 12345.6789;
n.toLocaleString('ko-KR');

// 콤마 찍기 3
let n = 12345678;
n += '';
reverse = '';
// 문자열 뒤집기
for (let i = 0; i < n.length; i++) {
  reverse = n[i] + reverse;
}
console.log(reverse);

let sample = '';
count = 0;
for (let i = 0; i < reverse.length; ++i) {
  if (count < 2){
    sample += reverse[i];
    ++count;
  } else {
    sample += reverse[i];
    sample += ','
    count = 0;
  }
}
console.log(sample);
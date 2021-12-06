// array 생성/활용에 많이 쓰이는 문법
repeat()
fill()
from()
map()
split()
slice()
forEach()
flat()



let s = 'abc';
s.repeat(2);

// 이터러블한 객체가 들어가면 각각 나눠준다.
Array.from('abc');

// 정말 '비어있음'을 선언한다. undefined와 다르다.
let a = Array(10);
// 비어있는 공간을 만들고, 그 공간을 fill(값)으로 채워준다.
// 즉 10개의 비어있는 공간을 100으로 채우는 것.
Array(10).fill(100);
// 10개의 비어있는 공간에, 0부터 채워준다.
Array(10).fill(0).map((value, index) => value + index);
// 문제
Array(100).fill(1).map((value, index) => (index + 1) ** 2);

let s = 'weniv CEO hojun.lee'
// Array로 반환 시키기
// 공백 기준으로 자르기
s.split(' ');
// 한 자씩 자르기
s.split('');
// split() 활용
let string = '12367'.split(''); // 문자열 형태의 배열로 반환함.
let sum = 0; // 합계를 저장할 변수 선언
string.map(value => parseInt(value)); // 문자열을 숫자열로 바꿔줌.
// forEach()로 각 배열의 값에 접근.
// 각 값을 sum에 합하여 저장.
string.map(value => parseInt(value)).forEach(value => sum += value);
sum; // sum 출력

// reduce: 많이 사용하지는 않으나, 알아는 두자
let arr = [1, 2, 3, 4, 5];
// sum은 누적되는 값, current는 index값
let result = arr.reduce((sum, current) => sum + current);
console.log(result)
// forEach로 대체 가능
let s = 0;
[1, 2, 3, 4, 5].forEach(i => s += i);

// flat(): 배열을 합쳐준다.
[1, 2, 3, [8, 9, 0]].flat();
[1, 2, 3, [8, 9, 0, [a, b, c]]].flat(2);





let today = new Date('2021/12/5/12:00')







// Math
Math.ceil(9.5); // 올림
// = 10
Math.ceil(-9.5);
// = -9
Math.floor(9.5); // 내림
// = 9
Math.round(9.5); // 반올림
// = 10
Math.max(1, 4, 3, 10, 7); // 최댓값 출력
// = 10
Math.min(1, 4, 3 ,10, 7); // 최솟값 출력
// = 1
// 출력이 안된다.
Math.max([1, 4, 3, 10, 7]);
Math.min([1, 4, 3 ,10, 7]);
// ...(전개) 을 이용하자
Math.max(...[1, 4, 3, 10, 7]);
Math.min(...[1, 4, 3 ,10, 7]);
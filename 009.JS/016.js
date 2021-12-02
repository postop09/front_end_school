
// Object는 리터러블하지 않다.
let o = {
  a: 'aa',
  b: 'bb'
}

Object.entries(o)
Object.keys(o)
Object.values(o)
Object.is(0, -0)
Object.keys(o).length







// Map: key와 value로 존재한다
// Map(Map자료형): 메서드 map과 구분할 줄 알아야 한다.
// 리터러블하다: 순회가 가능한 객체이다.
let m = new Map();

m.set('하나', 'one');
m.set('둘', 'two');
m.set('셋', 'three');

m.entries();
m.delete('하나');
m.keys();
m.values();
m.size;
// Map값에 접근
m.get('하나');
// Map의 값이 있는지 확인
m.has('하나');

for (let i of m) {
  console.log(i);
}
// Object를 Map으로 묶어줘서 사용할 수도 있다.





// Set: 각각의 값만이 존재한다.
// 순서가 없다! index가 없다는 것. 중복을 허락하지 않는다.
let s = new Set('abcdeeeeeeeee');
s;
s.size;
s.add('f');
s.has('c');
s.delete('e');
s.forEach(i => console.log(i));

// 교집합 찾기
let a = new Set('abc');
let b = new Set('cde');
// 1) Set = a를 전개해서 배열로 만들어준다.
// 2) a의 배열에서 Set = b 가 가지고 있는 값을 출력해 냄.
[...a].filter(value => b.has(value));

// 합집합 만들기
let c = new Set([...a].concat([...b]));
let c = new Set([...a, ...b]);

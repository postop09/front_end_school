// array method

// map: 화살표 함수를 이용해, 데이터를 뽑아낸다.
//실무에서 너무 많이 사용한다. 반드시 알아야 하는 메서드
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// mdn 예제
let array = [1, 4, 9, 16];
let 값1 = array.map(x => x * 2); // 화살표 함수
// 아래와 같다.
function 제곱(x) {
  return x ** 2
}
값2 = arry.map(제곱);







let data = [
  {
    반: 1,
    번: 1,
    이름: "두식",
    중간고사점수: 55
  },
  {
    반: 1,
    번: 2,
    이름: "두팔",
    중간고사점수: 60
  },
  {
    반: 1,
    번: 3,
    이름: "두칠",
    중간고사점수: 30
  },
  {
    반: 1,
    번: 4,
    이름: "두승",
    중간고사점수: 70
  },
  {
    반: 1,
    번: 5,
    이름: "두박",
    중간고사점수: 100
  },
]
data.map(x => x.중간고사점수)
data.map(x => [x.이름, x.중간고사점수])

// 중간고사 점수를 더할 수 있는 방법
let s = 0
//메서드체이닝 활용
data.map(x => x.중간고사점수).forEach(y => s += y)

let newData = data.map(a => a.map(n => n *2));
// Date()
let d = new Date();
d.getFullYear()
// index 0값 부터
d.getMonth();
// index 1값 부터
d.getDate();
// index 0값 부터 (0일 1월 2화 3수 4목 5금 6토)
d.getDay();
// 실시간이 아니라 'new Date()' 선언했을 때의 시간
d.getHours();

d.getMinutes();

d.getSeconds();




//메서드 체이닝
'01001'.replace(/0/g, ' ').replace(/1/g, '#');





// 배열(Array) 그리고 메소드
let 과일 = ['사과', '수박', '복숭아', '딸기', '바나나'];
과일[0] = '한라봉'
과일[0][0] = '코' // 안된다!
// 텍스트는 바뀌지 않는다!!
// 배열에서만 적용되는 공식이다.
let text = 'abcde'
text[0] = 'A'
// 참고: 잘 사용하지 않음.
let 과일2 = new Array(5);
let 과일3 = new Array('사과', '수박', '복숭아', '딸기', '바나나');

let 과일 = ['사과', '수박', '복숭아', '딸기', '바나나'];
과일.pop()
과일.push('한라봉')
과일.unshift('귤')
과일.toString()
과일.shift()
과일.unshift('천혜향')
// 데이터값에 영향을 미치지 않는다.
과일.slice(2, 5) // 음수값도 가능하다: 과일.slice(2, -1)
// 데이터값에 영향을 미친다.
과일.splice(2, 5) // 전자가 index, 후자가 개수

let 과일 = ['복숭아', '딸기', '바나나'];
let 제주과일 = ['귤', '한라봉', '천혜향'];
// 새로운 배열을 만들어 주는 것
과일.concat(제주과일);
제주과일.concat(과일); // 순서 차이
let data = [10, 20, 30, 11, 22, 25, 20000]
data.sort() // 사전식 정렬
data.reverse() // 역정렬이 아니라 역순(그냥 뒤집음)
//오름차순: asc
data.sort((a, b) => a - b)
data.sort(function(a, b) {a - b})
// 내림차순: desc
data.sort((a, b) => b - a)
data.sort(function(a, b) {b - a})




// 다중 배열
let 행렬 = [[1,2,3],[4,5,6],[7,8,9]]
행렬[0] == [1,2,3]
행렬[0][0] == 1






// for in: 'in'dex값
let sample = [1, 2, 3]
for (let i in sample) {
  console.log(i);
}
sample;
// for of: index에 할당된 값
let sample = [1, 2, 3]
for (let i of sample) {
  console.log(i);
}
sample;





// 중첩되는 인덱스 값을 가져오는 경우가 많다. ex) 회원정보 JSON
// 회원정보[0]['friends'][0]["name"]

// 국영수사과
let 전교점수 = [
  // 1반
  [[10, 20, 30, 40, 50],
  [20, 30, 40, 50, 60]],
  // 2반
  [[10, 20, 30, 40, 50],
  [20, 30, 40, 50, 60]],
];
// 문제 1: 1반의 평균값
let 학생1 = 전교점수[0][0];
let result = 0;
for (let i of 학생1) {
  result += i/학생1.length;
}
let 학생2 = 전교점수[0][1];
let result2 = 0;
for (let i of 학생2) {
  result2 += i/학생2.length;
}
let 하나반 = result + result2;
console.log(하나반/ 2);

// 문제 1: 해설
let 총합 = 0;
for (let i = 0; i < 5; i++) {
  총합 += 전교점수[0][0][i]  
}
let 총합2 = 0;
for (let i = 0; i < 5; i++) {
  총합2 += 전교점수[0][1][i]
}

let 총합 = 0;
let 더해진수 = 0;
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 5; j++) {
    총합 += 전교점수[0][i][j]
    더해진수++;
  }
}
console.log(총합/더해진수);




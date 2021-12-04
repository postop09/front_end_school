// 1번
let array = [10,20,30,40,50];
let i = 0;

for(;i < array.length;) {
  console.log(array[i]);
  i++
}


// 2번
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element+'!!'));

// expected output: "a"
// expected output: "b"
// expected output: "c"


// 3번
let result = 0
for(value of array) {
  result += value;
}
console.log(result / array.length);


// 4번
for (let value in array) {
  console.log(value);
}
// 값을 출력 하려면
for (let value in array) {
  console.log(array[value]);
}


//5번
let i = 0
let result = 0

while (i < 101) {
  result += i;
  i += 2;
}
console.log(result)


// 6번 (참고만)
let num = 0;

do {
  console.log(num);
  num += 1;
} while (num < 11);


// 7번 (이중 while문)
for (var i = 2; i < 10; i++) {
  for (var j = 1; j < 10; j++) {
    document.write(`${i} X ${j} = ${i*j} <br>`);
  }
}
// 내부에 있는 조건이 만족될 때까지 반복, 조건에서 벗어나면 외부에 있는 조건 실행.
let i = 2;
let j = 1;

while (i < 10) {
  if (i == 6) {
    break;
  }
  while (j < 10) {
    console.log(`${i} X ${j} = ${i*j}`);
    j++;
  }
  i++;
  j = 1;
}

let i = 2;
let j = 1;

while (i < 10) {
  while (j < 10) {
    console.log(`${i} X ${j} = ${i*j}`);
    j++;
    if (j == 6) {
      break;
    }
  }
  i++;
  j = 1;
}
// let i = 0;
// while (i <= 9) {
//     //두번째 순회때 j가 있는지 확인
//     if (i == 1) console.log(j);
//     let j = 1;
//     i++;
// }


// 8번
// outer라는 식별자가 붙은 레이블 for 문
// 현업에서는 객체와 햇갈려서 잘 안쓰는 편
// 할꺼면 function으로.
hojun: for (var i = 2; i < 10; i++) {
  for (var j = 1; j < 10; j++) {
      // i + j === 3이면 hojun 이라는 식별자가 붙은 레이블 for 문을 탈출한다.
      if (i === 5) break hojun;
      console.log(`${i} X ${j} = ${i*j}`);
  }
}
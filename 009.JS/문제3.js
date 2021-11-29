let sample = [10, 20, 30, 5, 6, 3, 100, 110, 99, 88]
let temp = sample[0]

//최댓값
for (let i = 0; i < sample.length; i++) {
  if (temp < sample[i]) {
    temp = sample[i];
  }
}
console.log (temp)

//최솟값
for (let i = 0; i < sample.length; i++) {
  if (temp > sample[i]) {
    temp = sample[i];
  }
}
console.log (temp)





let text = 'javascript'

for (let i = 1; i < text.length; i++) {
  console.log(text[i-1], text[i]);
}



// // 틀린 답
// let value = [1, 3, 4, 8, 13, 17, 20];
// let temp = value[1] - value[0]

// for (let i = 0; i < value.length - 1; i++) {
//     if (temp > (value[i+1] - value[i])){
//         console.log(value[i+1], value[i])
//     }
// }

// 더 그럴싸한 코드
let value = [1, 4, 6, 8, 13, 17, 20, 21, 28];
let temp = value[1] - value[0] // 초기값은 4 - 1 = 3
let result = 0

for (let i = 0; i < value.length - 1; i++) {
    if (temp > (value[i+1] - value[i])){
        temp = value[i+1] - value[i];
        result = i;
    }
}

console.log(value[result], value[result+1]);

//1번째 순회(i == 0, temp == 3, result == 0)
for (let i = 0; i < 9 - 1; i++) {
  if (3 > (value[1] - value[0])){
      temp = value[i+1] - value[i];
      result = i;
  }
}

//2번째 순회(i == 1, temp == 2, result == 1)
for (let i = 0; i < 9 - 1; i++) {
  if (3 > (value[1+1] - value[1])){
      temp = 2;
      result = 1;
  }
}

//3번째 순회(i == 2, temp == 2, result == 1)
for (let i = 0; i < 9 - 1; i++) {
  if (2 > (value[2+1] - value[2])){
      temp = value[i+1] - value[i];
      result = i;
  }
}

//4번째 순회(i == 3, temp == 2, result == 1)
for (let i = 0; i < 9 - 1; i++) {
  if (2 > (value[3+1] - value[3])){
      temp = value[i+1] - value[i];
      result = i;
  }
}

//5번째 순회(i == 4, temp == 2, result == 1)
for (let i = 0; i < 9 - 1; i++) {
  if (temp > (value[4+1] - value[4])){
      temp = value[i+1] - value[i];
      result = i;
  }
}

//6번째 순회(i == 5, temp == 2, result == 1)
for (let i = 0; i < 9 - 1; i++) {
  if (2 > (value[5+1] - value[5])){
      temp = value[i+1] - value[i];
      result = i;
  }
}

//7번째 순회(i == 6, temp == 2, result == 6)
for (let i = 0; i < 9 - 1; i++) {
  if (2 > (value[6+1] - value[6])){
      1 = value[6+1] - value[6];
      result = 6;
  }
}

//8번째 순회(i == 7, temp == 1, result == 6)
for (let i = 0; i < 9 - 1; i++) {
  if (2 > (value[7+1] - value[7])){
      temp = value[i+1] - value[i];
      result = i;
  }
}

console.log(value[result], value[result+1]);
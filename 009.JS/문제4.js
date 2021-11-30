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
// 10000까지 8이 들어있는 개수

let text = '';
let count = 0;

for (let i = 0; i < 10001; i++) {
  text += i;
}
// console.log(text);

for (let i = 0; i < text.length; i++) {
  if (text[i] == '8') {
    count += 1;
  }
}
console.log(count);





function countEight (number) {
  let array = Array.from(new Array(number), (x,i) => i + 1)
  return array.join("").split("8").length-1;
}


Array.apply( null, Array( 10000 ) ).map( ( v, i ) => { return i } ).join( "" ).match( /8/g ).length
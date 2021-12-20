// 원본 데이터를 직접 건드린 경우
const aespa = ['카리나', '윈터', '지젤', '닝닝'];

aespa.forEach((item, index) => {
  aespa[index] = item + '💚';
});
console.log(aespa);

// 원본 데이터에 손상을 주지 않고, 복사된 데이터를 만드는 경우
const aespa2 = aespa.map((item) => {
  return item + '💚'
});
console.log(aespa);

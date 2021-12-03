// 랜덤 함수
Math.random(); // 0이상 1미만

Math.random() * 10; // 정수로 만들어 주기

Math.floor(Math.random() * 10); // 버림 활용 (곱해지는 숫자가 범위의 최대치)

Math.floor(Math.random() * 5); // 범위: 0 ~ 4

Math.floor(Math.random() * 5 + 2); // 범위: 2 ~ 6

function randomNum(min, max) { // 매개변수(파라미터)
  return Math.floor(Math.random() * (max - min) + min);
}

randomNum(1, 46); // 인자(아규먼트)




// 가장 먼저 의사코드를 작성하자.
// 로또 번호 추출기
// 1. 랜덤 숫자의 범위는 1 ~ 45번이 출력
// 2. 랜덤 숫자를 뽑기 6번 실행
// 3. 중복되는 숫자는 없어야 함
function randomNum(min, max) { // 매개변수(파라미터)
  return Math.floor(Math.random() * (max - min) + min);
}
let number = [];

for (let i = 0; i < 6; i++) {
  number.push(randomNum(1, 46));
}
console.log([...number])

// 풀이 1) while 반복문을 사용
function randomNum(min, max) { // 매개변수(파라미터)
  let result = Math.floor(Math.random() * (max - min) + min);
}
let lottoArr = [];
function lottoGenerator() {
  while(lottoArr.length < 6) {
    let result = randomNum(1, 46);
    let isgod = false;
    // 중복판단
    lottoArr.forEach(element => {
      if(element === result);
      isGod = true;
    })
    // 중복이 없다면 배열에 추가
    if (!isGod) {
      lottoArr.push(results);
    }
  }
  return lottoArr;
}
console.log(lottoGenerator())

// 풀이 2) includes(IE지원 x)
function randomNum(min, max) { // 매개변수(파라미터)
  let result = Math.floor(Math.random() * (max - min) + min);
}
let lottoArr = [];
function lottoGenerator() {
  while(lottoArr.length < 6) {
    let result = randomNum(1, 46);
    if (!lottoArr.includes(result)) {
      lottoArr.includes(result);
    }
  }
  return lottoArr;
}
console.log(lottoGenerator())

// 풀이 3) Set
function randomNum(min, max) { // 매개변수(파라미터)
  let result = Math.floor(Math.random() * (max - min) + min);
}
let lottoSet = new Set();
function lottoGenerator() {
  while(lottoSet.size < 6) {
    let result = randomNum(1, 46);
    lottoSet.add(result);
  }
  return lottoSet;
}
console.log(lottoGenerator())

// 번외 풀이)
// 함수선언
function randomNum(min, max){
  return Math.floor(Math.random()*(max-min)+min);
}
// 예외처리
function tryLotto(...input) {
  if (input.length !== 6) {
    console.log('숫자를 6개 입력해야 합니다.');
    return;
  } else if (input.length !== new Set(input).size) {
    console.log('숫자를 중복되지 않게 입력해야 합니다.');
    return;
  } else if (input.some(v => !Number.isInteger(v) || v > 45 || v < 1)) {
    console.log('1부터 45까지 숫자 중 하나를 입력해야 합니다.');
    return;
  }
// 번호 추출
  const selected = [];
  let count = 0;
  while (count < 7) {
      const selectedNum = randomNum(1, 46);
      if (!selected.includes(selectedNum)) {
          count++;
          selected.push(selectedNum);
      }
  }
// 당첨번호 대조하기
  console.log(`당첨번호: ${selected.slice(0, 6).join(' ')} | 보너스: ${selected[6]}`);
  const nums = input.filter(v => selected.slice(0, 6).includes(v));
  switch (nums.length) {
      case 0: case 1: case 2:
          console.log('꽝!');
          break;
      case 3:
          console.log('★ 5등 당첨! ★');
          break;
      case 4:
          console.log('★★ 4등 당첨! ★★');
          break;
      case 5:
          if (input.includes(selected[6])) {
            console.log('★★★★ 2등 당첨!! ★★★★');
            nums.push(`보너스 ${selected[6]}`);
          } else console.log('★★★ 3등 당첨!! ★★★');
          break;
      case 6:
          console.log('★★★★★ 1등 당첨!!! ★★★★★');
  }
  if (nums.length > 0) console.log(`내가 맞춘 번호: ${nums.join(' ')}`);
}
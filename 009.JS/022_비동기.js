// 콜백
// 나중에 호출 하겠다.

/* 간단한 정의
promise : 비동기적으로 실행시켜 주겠다는 약속
then : 정상적으로 실행된 다음, 이어서 실행시켜주는 녀석
catch : promise구문 안에서 오류를 잡아내는 녀석
finally : 무조건 실행하는 녀석
*/



// promise
// 비동기적으로 실행된다.
// 예) 로그인을 했을 경우, 올바른 값 입력/올바르지 않은 입력...
// 모던자바스크립트 예제 (비동기적 실행)
let promise = new Promise(function(resolve, reject) {
  // 프라미스가 만들어지면 executor 함수는 자동으로 실행됩니다.
  // 10초 뒤에 일이 성공적으로 끝났다는 신호가 전달되면서 result는 'done'이 됩니다.
  setTimeout(() => resolve("끝남!"), 10000);
});
console.log('hello world');
console.log(promise);
// 계속해서 log를 출력해보면, 10초 뒤에 resolve값이 출력된다.
// setTimeout 으로 지연시키고 설정된 시간이 지났을때 결과가 나타난다.
// resolve는 성공. reject는 실패!! 

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("끝남!"), 3000);
});

console.log('hello world');
promise.then(v => console.log(v));
console.log('hello world2');
// hello world
// hello world2
// 끝남!







// then : 정상적으로 실행된 다음 단계
// 이 형태를 알고 있자.
// new Promise((resolve, reject) {...code...})
//   .then(...code...)
//   .then(...code...)
//   .finally(...code...)
//   .catch(...code...); // <-- .catch에서 에러 객체를 다룰 수 있음

// then의 대표적 사용
new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 10000); // (*)
}).then(function(result) { // (**)
  alert(result); // 1
  return result * 2;
}).then(function(result) { // (***)
  alert(result); // 2
  return result * 2;
}).then(function(result) {
  alert(result); // 4
  return result * 2;
});

// 참고
let p = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 10000); // (*)
});
console.log('hello world');
let p2 = p.then(function(result) { // (**)
  console.log(result); // 1
  return result * 2;
});
console.log('hello world2');
let p3 = p2.then(function(result) { // (***)
  console.log(result); // 2
  return result * 2;
});
console.log('hello world3');
let p4 = p3.then(function(result) {
  console.log(result); // 4
  return result * 2;
});

new Promise(function(resolve, reject) {
  setTimeout(() => reject('error'), 1000); // (*)
}).then(function(result) { // (**)
  alert(result + ' : 잘 수행!');
  return result + 'one';
}).catch(function(result) { // (***)
  alert(result + ' : 애러 발생!'); // 1
  return result + 'two';
}).then(function(result) {
  alert(result + ' : 잘 수행!'); // 4
  return result + 'three';
});




// fetch : promise와 같은 형식으로 사용된다.
fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json);
        return json
    })
console.log(1);
console.log(2);

// fetch 활용법
fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function(response) {
        return response.json(); // 1 
    })
    .then(function(json) {
        console.log(json); // 2
        return json
    })
    .then(function(json) {
        console.log(json.filter(s => s['시·도별(1)'] === '전국')); // 3
        return json
    })
    .then(function(json) {
      console.log(json.map(obj => obj['1차 접종 퍼센트'])); // 4
      return
  })






// async, await
// 그냥 promise처럼 사용 할 수 있다.
async function f() {
  return 100;
}
f().then(function(result) { // (**)
  alert(result); // 1
  return result * 2;
}).then(function(result) { // (***)
  alert(result); // 2
  return result * 2;
}).then(function(result) {
  alert(result); // 4
  return result * 2;
});

async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 1000)
  });

  let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)

  alert(result); // "완료!"
}
f();

async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 3000)
  });

  let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)

  alert(result); // "완료!"
    return 100
}

f().then(function(result) { // (**)
  alert(result); // 1
  return result * 2;
}).then(function(result) { // (***)
  alert(result); // 2
  return result * 2;
}).then(function(result) {
  alert(result); // 4
  return result * 2;
});
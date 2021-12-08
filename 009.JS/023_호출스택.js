// 호출 스택
function one(){ two(); }
function two(){ three(); }
function three(){ console.log('end'); }

// Stack이란?? last in first out
// 이벤트 루프: 이런게 있다.
console.log(1);
setTimeout(function(){
    console.log(2);
}, 1000) // setTimeout(()=> console.log(2), 1000)
console.log(3);

// Queue란?? first in first out





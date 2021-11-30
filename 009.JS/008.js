// 형태(type)

// 문자열(string)
let s = 'srting'
console.dir(s)

s.length

//indexof는 시작값을 설정할 수 있고,
//search는 정규표현식을 사용할 수 있다.
s.indexOf('t')
s.search('ri')

//1번째 부터 3번째 까지 잘라온다. = rt
s.slice(1, 3) / s.slice(1, -2) //음수값을 찾아감.
s.substring(1, 3) / s.substring(1, -2) //음수값을 0값으로 처리함.

//1번째 부터 3개를 가져온다. = rti
s.substr(1, 3)

let x = '100,000,000'
//replace도 정규표현식을 종종 사용한다.
s.replace('srt', 'work') // = working
x.replaceAll(',', '')
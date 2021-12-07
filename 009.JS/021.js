function 사람(이름, 나이) {
  this.이름 = 이름;
  this.나이 = 나이;
}

let 호준 = new 사람('호준', 10);
let 재현 = new 사람('재현', 5);






// class: 붕어빵 찍는 틀, 공장
// 인스턴스 : 붕어빵, 상품
class Myclass {
  // 여러 변수 선언 가능
  x = 10;
  x = 20;
  // 여러 메서드 정의 가능
  constructor() {}
  method1() {}
  method2() {}
  // ...
  // 콤마를 사용하지 않는다!!
}



class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}
// 사용법:
let user = new User("John");
user.sayHi();



class User {
  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}
// 클래스는 함수입니다.
alert(typeof User); // function

// 정확히는 생성자 메서드와 동일합니다.
alert(User === User.prototype.constructor); // true

// 클래스 내부에서 정의한 메서드는 User.prototype에 저장됩니다.
alert(User.prototype.sayHi); // alert(this.name);

// 현재 프로토타입에는 메서드가 두 개입니다.
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi



class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    alert(`${this.name} 은/는 속도 ${this.speed}로 달립니다.`);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} 이/가 멈췄습니다.`);
  }
}

let animal = new Animal("동물");
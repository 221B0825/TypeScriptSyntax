//9. 유니온 타입
// Union Type은 Typescript가 가지는 타입 중 하나로 하나의 값이 여러 개의 타입을 가지는 경우 사용한다.
let text: string | number = 22;
text = "22";

//유니온 타입이 인터페이스를 연결했을 때 모든 타입의 공통 속성에만 접근할 수 있다.

interface Apple {
  name: string;
  age: number;
}

interface Banana {
  name: string;
  character: number;
}

function combine(fruit: Apple | Banana) {
  fruit.name;
  //fruit.age; (error/타입 오류)
  //fruit.character; (error/타입 오류)
}
//공통적인 속성에만 접근 가능하다.
//이때 개별적인 속성에 접근하려면 유니온 타입 가드가 필요하다
//유니온 타입 가드
function combineUnionType(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 == "number" && typeof input2 == "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

console.log(combineUnionType("hello", "world"));
console.log(combineUnionType(10, 10));

//클래스 객체 식별

class Apple {}
class Banana {}

// const combineClass(fruit: Apple|Banana){
//   if(fruit instanceof Apple){
//     fruit.apple(); //fruit 가 Apple 클래스의 객체
//   }else{
//     fruit.banana(); //fruit가 Banana 클래스의 객체
//   }
// }

//일반 객체 식별
//자바스크립트의 객체리터럴과 달리 타입스크립트에서는 객체 타입을 지정할 때 인터페이스를 사용하여 객체의 모양을 지정할 수 있다.
interface Cat {
  meow(): string;
}

interface Dog {
  bowow(): string;
}

function checkType(pet: Cat | Dog) {
  if ("meow" in pet) {
    (pet as Cat).meow();
  } else {
    (pet as Dog).bowow();
  }
}
//if 문의 조건을 통해서 pet 타입을 체크했지만 if 문 내부에서 as 문을 통해 한번 더 어떤 객체인지 알려주어야 한다.

//null 체크
// 값이 null이어서 사용할 수 없거나 null이 아닌 경우 예외처리를 하고 싶을 때 사용한다.
function nullCheck(val: string | null) {
  if (val != null) {
    return val;
  } else {
    return 0;
  }
}

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

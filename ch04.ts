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

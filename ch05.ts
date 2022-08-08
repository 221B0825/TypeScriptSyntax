//10. Type Casting과 Type Assertion
//타입 캐스팅(Type Casting)
//JAVA 나 C++ 다른 프로그래밍 언어에서 타입 캐스팅이란 형 변환을 의미한다.
//타입스크립트에서도 특정 타입임을 단언해야하는 상황이 있는데 특별한 검사나 재구성을 하지 않기 때문에 Type Casting과는 별개의 개념이다.

//Type Assertion
var val: any;
var foo1 = <string>val;

//as 연산자
var val: any;
var foo2 = val as number;

//주의해야할 점
const str = "hello world";
//console.log((str as number[]).push(123)); //Error
//문자열로 선언되있는 str 변수를 as number[] 를 통해 타입 에러를 무시하고 숫자형을 넣었을때
//런타임 과정에서 에러가 발생한다.

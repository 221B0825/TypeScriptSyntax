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

//함수 (Function)
//함수의 인자
//함수의 기본 타입 선언

// //자바스크립트는 아래와 같이 선언한다
// function sum(number1, number2){
//     return number1 + number2;
//     console.log(number1+2);
// }
function sum(number1: number, number2: number): number {
  return number1 + number2;
}
console.log(sum(10, 20)); // result: 30

function isChildren(age: number): boolean {
  return age < 19;
}

console.log(isChildren(47)); // result: false
console.log(isChildren(5)); // result: true

//반환 값이 없는 경우 void를 기재한다

function sumVoid(number1: number, number2: number): void {
  console.log(number1 + number2);
}

//선택적 매개변수 `?`
//아래의 예제는 JavaScript 문법으로 작성한 예시이다.
function morningJava(name) {
  return `Good morning ${name || "everyone"}`;
}

//console.log(morningJava()); //result: Good morning everyone

function morningType(name?: string): string {
  return `Good morning ${name || "everyone"}`;
}

console.log(morningType()); //result: Good morning everyone
//여기서 주의할 점은, 선택적 매개변수가 필수 매개변수보다 앞에 위치하면 에러가 발생한다는 사실이다.

function morningNameTime(name: string | undefined, time: number): string {
  return `Good morning ${name || "everyone"}, Time is ${time || 8}.`;
}

//console.log(morningNameTime()) // Error
console.log(morningNameTime("eunseo", 7)); // result: Good morning eunseo, Time is 7

//매개변수 초기화
//타입을 적어주는 것과 다른 방법으로 매개 변수를 선언할 때 값을 미리 초기화 할 수 있다

function sumInit(a: number, b = 2022): number {
  return a + b;
}
console.log(sumInit(10, undefined)); // result: 2032
console.log(sumInit(10)); //result: 2032

//REST 문법이 적용된 매개변수
//전개문법으로 받은 매개변수는 배열이기 때문에 타입을 배열로 받는다
function sumREST(...numbers: number[]): number {
  return numbers.reduce((result, number) => result + number, 0);
}

console.log(sumREST(10, 20, 30)); //result: 60

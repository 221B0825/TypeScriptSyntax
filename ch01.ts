//char 라는 정적 타입으로 선언한 변수 x에는 1바이트 정수 타입의 값만 할당할 수 있다.
//char x;

//정적 선언은 타입 변경이 불가능하며, 컴파일 시점에서 타입 체크(데이터가 타입에 맞는지)확인한다.

//error
//var num = 3;
//num = "string";

//------
//동적 타입 언어는 변수에 어떠한 데이터 타입의 값도 넣을 수 있다. 값을 할당하는 시점에 변수의 타입이 동적으로 결정된다.
// var x = 3;
// x = 'string';

//Typescript 는 정적 언어로, var, let, const로 선언 후 : 뒤에 타입을 지정하여 사용한다. 이를 타입주석이라고 한다.

//기본적인 타입 표기
let x: number;
let y: string;

let address: string = '제주';
let age: number = 28;

//error: 다른 타입의 변수값으로 변경 불가능
//address = 0;

//타입추론: 타입 선언이 존재하지 않으면 컴파일러가 타입을 추론한다
let a = true;
let b = 'Hello';

//any 타입: 모든 타입의 값을 지정할 수 있다. 하지만 타입 체크를 확실하게 하기 위해 사용을 지양한다.
let c: any = 0;
c = true;
c = 'typescript';
c = {};

//never 타입: 반환을 절대 하지 않는 함수로, 도달하지 않는 코드를 나타내며 실행이 종료되지 않고 무한으로 반복되는 함수나 오류를 발생시키기 위해 존재하는 함수가 그 예이다.
const neverTest = () => {
  while (true) {
    console.log('함수가 실행중입니다.');
  }
};

function sayName(value: string): string {
  if (typeof value == 'string') {
    return value;
  } else {
    return value;
  }
}

//union 타입: 하나의 변수에 지정할 수 있는 타입이 여러 개일 때 사용한다

let union: string | number;

//custom type: type 키워드를 사용하여 선언하고, 타입 별칭(type alias)을 사용하여 이미 존재하는 타입에 다른 이름을 붙여 사용할 수 있다.
type Centimeter = number;
type Kilogram = number;

//height에는 Centimeter 타입의 별칭을 사용했다.
type Student = {
  name: string;
  height: Centimeter;
  weight: Kilogram;
};

let kim: Student = {
  name: 'kim',
  height: 165,
  weight: 55,
};

//만약 타입 내 프로퍼티가 선택사항이라면, 프로퍼티 뒤에 물음표를 붙여 조건부임을 알린다.
type StudentName = {
  name: string;
  height?: Centimeter;
  weight?: Kilogram;
};

let yuna: StudentName = {
  name: 'yuna',
};

//배열
let list: number[] = [1, 2, 3, 4, 5];
let member: string[] = ['김', '이', '박'];
member.push('유');
//result: ['김', '이', '박', '유']

let anyMember: any[] = ['김', 10, true, null];
//any는 웬만하면 피하는 것이 좋으므로, union을 사용한다.

let unionMember: (string | number | boolean | null)[] = ['김', 10, true, null];

//generic 배열
let str: Array<string> = ['김'];

let unionStr: Array<string | number> = ['김', 10];
//type을 참조할 때는 타입 쿼리를 이용한다. typeof 연산자를 사용하여 참조할 변수의 타입을 얻어와 지정한다.
let unionStr2: typeof unionStr = ['이', 20];

//제네릭 배열 타입은 객체 타입도 지정할 수 있으며, 아래와 같이 배열 요소를 익명 함수로도 받을 수 있다.
let arr: Array<() => string> = [() => '김', () => '이'];

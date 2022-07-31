//5. 튜플(Tuple)-----------------------------------
//사용자의 이름과 나이를 배열에 저장하기 위해 이름은 string으로, 나이는 number로 타입을 지정해서 배열에 저장해보자
//Tuple: 튜플은 n개의 요소에 대응하는 타입이다. 아래와 같이 배열의 0번째 요소는 string, 1번째 요소는 number로 강제된다.
//타입스크립트 2.7 이후로는 튜플타입과 배열 요소의 개수가 반드시 같아야 한다.
let tupleMember: [string, number] = ['김', 10];

//6. 객체 타입(Object Types)-----------------------------------
//객체 타입: JS와 가장 큰 차이점은 TS는 객체를 선언할 때 어떤 타입인지 명확하게 정의해야 한다는 점이다.
const student1: object = {};
const student2 = {}; //any type

//타입을 object로 선언하면 typeof 연산자가 기본적으로 모든 타입을 나타낸다. 최상위 타입이며, any타입보다는 좁은 범위이다.
//타입을 별도로 지정하지 않는다면 자동으로 any 타입으로 지정된다.

// let student: {
//     name: string,
//     grade: number,
// };

// student = {
//     name: '학생1',
//     grade: 3
// }

//타입을 지정해주면 해당 타입의 객체만 해당 변수에 저장될 수 있다고 알려주는 것이다.
//위의 예시는 앞서 정의된 student 객체의 타입에 맞는 값을 대입하는 방법이다.

//타입 추론
const studentTest = {
  name: 'yu',
  grade: 3,
};

//앞서 객체를 만들어 필드와 자료형을 지정했다면 표기를 하지 않고도 객체를 만들 수 있다.
//타입의 표기가 없는 경우 값을 기반으로 타입을 유추해낸다. studentTest 객체의 name은 string이고, grade는 number 자료형으로 추론된다.

//옵션 속성
const cat: { type: string; age?: number } = {
  type: 'Persian',
};
cat.age = 2;

//선택적 속성을 사용하면 해당 필드는 선택적으로 사용할 수 있어서 객체 생성 시 나중에 값을 추가할 수 있다.

//인덱스 시그니처
const studentIndex: { [index: string]: number } = {};
studentIndex.id = 220101;
//error: studentIndex.id = "kim";
// 빈 객체를 만들 떄 필드의 자료형을 지정하지 않은 채 인덱스를 사용하면 된다.

//7. 열거형-----------------------------------
//열거형이란, 비슷한 종류의 아이템들을 함께 묶어서 표현할 수 있는 수단이다.
//열거형의 첫 이름은 대문자이며, 키의 첫 문자도 대문자로 표시하는 것을 권장한다. 선언된 열거형은 객체와 동일하게 점 또는 괄호 표기로 열거형의 값에 접근 가능하다.

// enum Class {
//     Rock, // 0
//     Scissors, // 1
//     Paper, // 2
// }

//숫자 열거형
//자동으로 열거형의 적절한 숫자를 추론해 할당한다. 지정된 숫자 값이 없다면 기본적으로 0부터 시작해 1씩 증가한다.
enum Class {
  Rock = 0,
  Scissors = 100 + 1, // 101
  Paper, // 102
}

//문자열 열거형
enum Game {
  Rock = 'ROCK',
  Scissors = 'SCISSORS',
  Paper = 'PAPER',
}
//문자열 또는 다른 문자열 열거형으로 상수를 초기화해주어야 한다.

//이종 열거형
enum GameMulti {
  Rock = 'ROCK',
  Scissors = 2,
  Paper,
}
console.log(GameMulti.Paper);
//열거형 값에 문자와 숫자 값을 혼합하여 사용할 수 있다.

//8. 타입 별칭 & 인터페이스

const food: string = 'banana';
//const food: string = 1; error

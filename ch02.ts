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
//타입에 대한 별칭을 제공하며, 재사용 가능하다.

//타입만 사용
const food: string = 'banana';
//const food: string = 1; error

//타입 별칭을 사용
//type 별창 = 타입; 으로 정의한다
type Food = string;
const MyFood: Food = 'banana';
//const MyFood2: Food = 1; error

//객체 타입
type User = {
  name: string;
  age: number;
};

//함수의 파라미터
function getUser(user: User) {}
let newUser: User = {
  name: '철수',
  age: 20,
};
getUser(newUser);

//함수 타입
type AddNumber = (x: number, y: number) => number; //return 해주는 값이 없을 땐 void
let addNumber: AddNumber = (x, y) => {
  return x + y;
};
//타입 별칭은 string, number와 같은 원시 타입보다는 객체, 함수 등에 유용하게 사용된다.

//함수의 스펙(파라미터, 반환타입 등)-------------
interface IAddNumber {
  (x: number, y: number): number; //retrun값이 없을 땐 void
}

let iAddNumber: IAddNumber = (x, y) => {
  return x + y;
};

iAddNumber(10, 10); //result: 20-------------

//함수의 파라미터-------------
interface IUser {
  name: string;
  age: number;
}

function getAge(obj: User) {
  console.log(obj.age);
}

let person = {
  name: '철수',
  age: 20,
  gender: 'male',
};

getAge(person); // result: 20-------------
//인터페이스를 인자로 사용할 때 정의한 프로퍼티와 타입의 조건을 만족한다면,
//인자로 받는 객체의 프로퍼티 개수나 순서는 같지 않아도 된다.

//-------------
interface UserOption {
  name: string;
  age: number;
  gender?: 'male' | 'female';
}

function getAgeOption(obj: User) {
  console.log(obj.name);
  console.log(obj.age);
}

let personOption = {
  name: '철수',
  age: 20,
};

getAgeOption(personOption);
//-------------
//getAgeOption 함수의 인자로 받는 personOption의 프로퍼티에는 gender가 없지만,
//인터페이스에 이를 옵션 속성으로 정의했기 때문에 오류가 나지 않는다.

//-------------
//읽기 전용 속성
interface UserReadOnly {
  readonly name: string;
}

let personRead: UserReadOnly = {
  name: '철수',
};

//personRead.name = "영희"; error
//-------------
//읽기 전용 배열
let Users: ReadonlyArray<string> = ['철수', '영희'];

//Users.splice(0,1); error
//Users.push("현지"); error
//Users.[0] = "현지"; error
//-------------

//클래스 타입
//implements로 미리 정의된 인터페이스를 채택하여 클래스를 정의할 수 있다.
//인터페이스로 정의한 메서드나 프로퍼티들은 해당 클래스에 필수적으로 들어가야 한다.
interface UserImpl {
  name: string;
  age: number;
  getAge(age: number): void;
}

class newUserImpl implements UserImpl {
  name: string = '철수';
  age: number = 20;
  getAge(age: number) {
    console.log(this.age);
  }
  constructor() {}
}

let user1 = new newUserImpl();
user1; // result: {name: "철수", age: 20}
//-------------
//constructor 사용
interface UserCon {
  name: string;
  age: number;
  getAge(age: number): void;
}

class newUserCon implements User {
  constructor(public name: string, public age: number) {}
  getAge(age: number) {
    console.log(this.age);
  }
}

let user2 = new newUserCon('영희', 20);
user2; //result: {name: "영희", age: 20}

//인터페이스와 타입 별칭의 차이-------------
//가장 큰 차이는 타입의 확장 가능, 불가능 여부이다.

interface UserInterface {
  name: string;
}

interface UserInterface {
  age: number;
}

//같은 이름으로 정의하면 자동으로 확장된다.
//새로운 속성을 추가하기 위해 같은 이름으로 재정의하여 확장할 수 있다.
//이를 선언적 확장이라고 한다.

type UserType = {
  name: string;
};

// type UserType = {
//   age: number;
// } error
//타입은 같은 이름으로 재정의 할 수 없다.
//-------------

//인터페이스의 확장-------------
//extends를 사용하여 인터페이스 간 확장이 가능하다.
interface UserBasic {
  name: string;
}

interface UserInfo extends User {
  age: number;
}

let personExtends: UserInfo = {
  name: '철수',
  age: 20,
};

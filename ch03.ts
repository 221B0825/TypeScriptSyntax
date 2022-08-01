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

//인터페이스를 여러 개 상속받을 수 있다.
interface UserExtendsMulti {
  name: string;
}

interface Age {
  age: number;
}

interface UserInfoMulti extends User, Age {
  gender: string;
}

let newUserMulti: UserInfoMulti = {
  name: '영희',
  age: 20,
  gender: 'female',
};
//-------------

//인터페이스 -> 타입 확장
type UserTypeExtends = {
  name: string;
  age: number;
};

interface UserInfoTypeExtends extends User {
  gender: string;
}

let newUserTypeExtends: UserInfoTypeExtends = {
  name: '영희',
  age: 20,
  gender: 'female',
};

//interface UserInfo2 extends string {} 인터페이스는 타입을 상속받을 수 있지만 리터럴타입은 불가능하다.
//또한 유니온 연산자를 사용한 타입은 extends, implements할 수 없다.

//타입의 확장
//타입 별칭은 extends 대신 인터섹션(&)을 사용하여 확장할 수 있다.
//인터페이스처럼 타입을 상속받아 확장하는 개념이 아닌, 새로운 타입을 정의하는 것이다.

type Coffee = {
  name: string;
};

type CoffeeInfo = Coffee & {
  price: number;
};

let newCoffee: CoffeeInfo = {
  name: '아메리카노',
  price: 5000,
};

//타입 -> 인터페이스 확장
interface Tea {
  name: string;
  price: number;
}

type TeaInfo = Tea & {
  ingredient: string;
};

let newTea: TeaInfo = {
  name: '홍차',
  price: 4000,
  ingredient: '찻잎',
};
//타입 뿐 아니라 인터페이스도 확장이 가능하다
//-------------

//VScode preview 속성
//Type 이름에 마우스오버하면 전체 속성을 조회할 수 있으며, 인터페이스는 인터페이스 이름만 조회 가능하다

//Typescript 공식 문서에는 가능하다면 interface를 사용하고,
//인터페이스로 표현할 수 없거나 유니온, 튜플을 사용해야 하는 상황이라면 타입 별칭을 사용하도록 권장하고 있다.

// class
//  선언적 방식

clsas A {}

console.log(new A());

//  class 표현식을 변수에 할당

const B = class {};

console.log(new B());

// constructor

class A {}

console.log(new A());

class B{
    constructor(){
        console.log('constructor');
    }
}

console.log(new B());

class C{
    constructor(name,age){
        console.log('constructor',name,age);
    }
}

console.log(new C('Mark',age));
console.log(new C());

// 멤버 변수

class A{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

console.log(new A('Mark',37));

// class field 는 런타임 확인

class B{
    name;
    age;
}

console.timeLog(new B());

class C{
    name = 'no name';
    age = 0;

    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

console.log(new C('Mark',37));

// 멤버 함수

class A{
    hello1(){
        console.log('hello1',this);
    }

    hello2 = () => {
        console.log('hello2',this);
    }
}

new A().hello1();
new A().hello2();

class B{
    name = 'Mark';

    hello(){
        console.log('hello', this.name);
    }
}

new B().hello();

// get,set

class A{
    _name = 'no name';

    get name(){
        return this._name + '@@@';
    }

    set name(value){
        this._name = value + '!!!';
    }
}

const a = new A();
console.log(a); //no name
a.name = 'Mark'; 
console.log(a); //Mark!!!

console.log(a.name); //this._name + @@@ ==> Mark!!!@@@
console.log(a._name); // Mark!!!

// readonly

class B{
    _name = 'no name';

    get name(){
        return this._name + '@@@';
    }
}

const b = new B();
console.log(b); //no_name
b.name = 'Mark';
console.log(b); //no_name ==>> set이 없어서

// static 변수, 함수

class A{
    static age = 37;
    static hello(){
        console.log(A.age);
    }
}

console.log(A,A.age);
A.hello();

class B{
    age = 37;
    static hello(){
        console.log(this.age);
    }
}

console.log(B, B.age);  //undefined
B.hello();  //undefined
// new B().hello();

class C{
    static name = "이 클래스의 이름은 c가 아니다.";
}
console.log(c);
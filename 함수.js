// function
// 이름이 hello1인 함수를 선언

function hello1(){
    console.log('hello1');
}

console.log(hello1, typeof hello1);

const hello1 = function(){
    console.log('hello1');
}

console.log(hello1, typeof hello1);

// 함수의 매개변수
// 함수를 호출할 때 값을 지정

function hello2(name){
    console.log(name," 안녕하세요");
}

cosnt hello2 = function(name){
    console.log(name," 안녕하세요");
}
// 함수의 리턴
// 함수를 실행하면 얻어지는 값

function hello3(name){
    return `hello3 ${name}`;
}

console.log(hello3);

const hello3 = function(name){
    return `hello3 ${name}`;
}


function hello1(){
    console.log('hello1');
}

hello1();

var hello2 = function(){
    console.log('hello2');
}

const hello3 = function(){
    console.log('hello3');
}

const sum = new Function('a','b','c','return a + b + c');

console.log(sum(1,2,3));


globalThis.a = 0;

{
    const a = 1;
    const test = new function('return a');

    console.log(test());
}

{
    const a = 2;

    const test = function(){
        return a;
    };

    console.log(test());
}

// arrow 함수를 만들어 이름이 hello4인 변수에 할당

const hello1 = () =>{
    console.log('hello1');
};

// 매개변수가 하나일 때, 괄호 생략 가능

const hello2 = name =>{
    console.log('hello2',name)
};

const hello3 = (name,age) =>{
    console.log('hello3',name, age);
};

// 함수의 리턴
// 함수를 실행하면 얻어지는 값

const hello4 = name =>{
    return `hello4 ${name}`;
};

const hello5 = name =>`hello5 ${name}`;

// 생성자 함수를 이용하여 새로운 객체를 만들어 내는 방법

function Person(name, age){
    this.name = name;
    this.age = age;
}

const p = new Person('mark', 37);

console.log(p, p.name, p.age);

const a = new Person('Anna', 26);

console.log(a, a.name, a.age);

const Cat = (name,age) =>{
    console.log(this);
    this.name = name;
    this.age = age;
}

const c = new Cat('냥이',1);

// 함수를 호출하면 함수를 만들어서 리턴

function plus(base){
    return function(num){
        return base + num;
    }
}

const plus5 = plus(5);
console.log(plus5(10));

// 함수를 인자로 하여 함수를 호출

function hello(c){
    console.log('hello');
    c();
}

hello(function(){
    console.log('콜백');
});
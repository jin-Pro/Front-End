const dogName = '멍멍이';
const dogAge = 2;

console.log(dogName);
console.log(dogAge);

const dog = {
    name:Jenny,
    age : 2,
};

console.log(dog.name);
console.log(dog.age);
console.log(dog);

const ironMan = {
    name : '토니 스타크',
    actor : '로버트 다우니 주니어',
    alias : '아이언맨',
};

const captainAmerica = {
    name : '스티븐 로저스',
    actor : '크리스 에반스',
    alias : '캡틴 아메리카'
};

function print(hero){
    const text = `${hero.alias}(${hero.name})역할을 맡은 배우는 ${hero.actor}입니다.`;
    console.log(text);
}

print(ironMan);
print(captainAmerica);

const dog = {
    name : 'Jenny',
    sound : '멍멍',
    say : function say() {
        console.log(this.sound);
    }
};

dog.say();

const numbers = {
    a : 1,
    b : 2,
    get sum() {
        console.log('sum 함수가 실행됩니다!');
        return this.a + this.b;
    }
};

numbers.a = 5;
console.log(numbers.sum);  
// sum 함수를 조회만 해도 함수가 실행됨.

const dog1 = {
    myName: 'Jenny',
    set name(value){
        console.log('이름이 바뀝니다..');
        this.myName = value;
    }
}

console.log(dog.myName);
dog.Name = '멍멍이';
// set 함수 실행
console.log(dog.myName);



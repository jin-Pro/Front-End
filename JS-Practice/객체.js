function Animal(type, name, sound){
    this.type = type;
    this.name = name;
    this.sound = sound;
    this.say = function(){
        console.log(this.sound);
    }
}

Animal.prototype.sleep = function(){
    console.log('쿨쿨');
}
// 공통 함수 추가

const dog = new Animal('개','Jenny','밥줘');
const cat = new Animal('고양이','나비','야오오옹');

dog.say();  // 밥줘
cat.say();  // 야오오옹


function Lion(name,sound){
    Animal.call(this,'사자',name,sound);
}
// Lion을 생성할떄 Animal 객체를 호출해서 생성

Lion.prototype = Animal.prototype;
//Animal의 공통 함수를 Lion도 사용하기 위해


// ---------------class로 생성해보기

class Animal{
    constructor(type,name,sound){
        this.type = type;
        this.name = name;
        this.sound = sound;
    }

    say() {
        console.log(this.sound);
    }
}

class Dog extends Animal{
    constructor(type,name,sound){
        super('개',name,sound);
    }
}

dog = new Dog('Jenny','밥줘');
const cat2 = new Animal('고양이','나비','그르릉');

dog.say();
cat.say();


class Food{
    constructor(name){
        this.name = name;
        this.brands = [];
    }
    addBrand(brand){
        this.brands.push(brand);
    }
    print(){
        console.log(`${this.name}을 파는 음식점들 : `);
        console.log(this.brands.join(', '));
    }
}

const pizza = new Food('피자');
pizza.addBrand('피자핫');
pizza.addBrand('도미노 피자');

const chicken = new Food('치킨');
chicken.addBrand('BBQ');
chicken.addBrand('굽네치킨');

pizza.print();
chicken.print();
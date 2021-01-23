const a = 1;
const b = 2;
const sum = a + b;

// 를 함수로 만들어 본다.

function add(a,b) {
    return a+b;
}

const sum1 = add(1,2);
console.log(sum1);

function hello(name){
    console.log('Hello, ' + name + ' !');
}

hello(jin-Pro);

function hello1(name){
    console.log(`Hello ${name}!`);
}

hello1(jin-Pro);

function hello2(name){
    return `Hello ${name}!`;
}

console.log(hello2(jin-Pro));

function getGrade(score){
    if( score === 100){
        return 'A+';
    }else if(score >= 90){
        return 'A';
    }else if(score === 89){
        return 'B+';
    }else if(score >= 80){
        return 'B';
    }else if(score === 79){
        return 'C+';
    }else if(score >= 70){
        return 'C';
    }else{
        return 'D';
    }
}

const grade = getGade(100);
console.log(grade);


const add1 = (a, b) =>{
    return a+b;
}

const sum3 = add1(1,2);
console.log(sum3);

const hello4 = (name) =>{
    console.log(`Hello, ${name}!`);
}

hello4(jin-Pro);


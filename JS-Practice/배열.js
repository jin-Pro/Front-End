const array = [1,2,'abc',{},5];
console.log(array);
console.log(array[0]);

const objects = [
    {name : '멍멍이'},
    {name : '야옹이'}
];

console.log(objects[0]);

// 배열에 추가하는 함수 push()
objects.push({
    name : '멍뭉이'
});


// 배열의 길이를 확인 length
console.log(objects.length);



const superheroes = [
    '아이언맨',
    '캡틴 아메리카',
    '토르',
    '닥터스트레인지'
];

function print(hero){
    console.log(hero);
}

// forEach()
superheores.forEach(print);

superheroes.forEach(function(hero){
    console.log(hero);
})

superheroes.forEach(hero=>{
    console.log(hero);
})

// map

const array1 = [1,2,3,4,5,6,7,8];

const squared = [];

for(ley i = 0; i < array1.length; i++){
    squared.push(array1[i] * array1[i]);
}

console.log(squared);

// array1.forEach(n =>{
//     squared.push(n*n);
// });

const square = n => n*n;
const squared1 = array.map(square);
//  const squared1 = array.map(n => n*n);
console.log(squared1);


const items = {
    { 
        id : 1,
        text : 'hello'
    },
    {
        id : 2,
        text : 'bye'
    }
};

const texts = items.map(item => item.text);
console.log(texts);
// ["hello","bye"]

const superHero = ['아이언맨','토르','닥터스트레인지','캡틴아메리카'];

const index = superHero('아이언맨');

console.log(index);
// 0

const todos = [
    {
        id : 1,
        text : '자바스크립트 입문',
        done : true
    },
    {
        id : 2,
        text : '함수 배우기',
        done : true
    },
    {
        id : 3,
        text : '객체와 배열 배우기',
        done : true
    },
    {
        id : 4,
        text : '배열 내장함수 배우기',
        done : false
    }
]

const index = todos.findIndex(todo => todo.id === 3);
console.log(index);
// 2

const todo = todos.find(todo => todo.id === 3);
console.log(todo);

const tasksNotDone = todos.filter(todo => todo.done ===false);
console.log(tasksNotDone);
// id : 4 ~~~

const numbers = [10,20,30,40];
const index1 = numbers.indexOf(30);
numbers.splice(index1,2);
// index1 = 2인데 2부터 2개를 지우겠다
console.log(numbers);
// 10,20이 출력됨

numbers.push(30);
numbers.push(40);

const sliced = numbers.slice(0,2);
// 0부터 2인덱스전까지 잘라서 쓰겠다. 기존배열 건들지 않음

console.log(sliced);
//  [10,20];
console.log(numbers);
// [10,20,30,40];


const value = numbers.shift();
// 앞에서부터 하나씩 빼기

console.log(value);
// 10
numbers.shift();

console.log(numbers);
// 30,40

numbers.pop();
// 뒤에서부터 하나씩 빼기

console.log(numbers);
// 30

numbers.unshift(20);
// 앞에서부터 추가해줌

numbers.unshift(10);

numbers.push(40);
// 뒤에서부터 넣어줌

console.log(numbers);
// 10,20,30,40

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const concated = arr1.concat(arr2);
// 기존 배열을 건드리지 않음

console.log(arr2);
// 4,5,6

console.log(concated);
// 1,2,3,4,5,6

const alphabets = ['a','a','a','b','c','c','c','d','e'];

const counts = alphabets.reduce((acc,current) =>{
    if(acc[current]){
        acc[current] += 1;
    }else{
        acc[current] = 1;
    }
    return acc;
},{})
//  a: 3 b: 1 c: 3 d: 1 e: 1



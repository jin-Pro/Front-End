/*
if(표현식){
    표현식이 참으로 평가될 때, 실행되는 문장들의 모음
}
*/

if(true){
    console.log('항상 실행');
}

if(false){
    console.log('항상 실행되지 않음');
}

// 블록에 코드가 한줄이면, 중괄호{}는 생략이 가능하다.

if(true) console.log('항상실행');

// false
// 0
// ''
// null
// underfined
// NaN

if(false) console.log(false);
if(0) console.log(0);
if('') console.log('');
if(undefined) console.log(undefined);
if(NaN) console.log(NaN);

// true
// 37
// -37
// 'Mark'
// {}
// []

if(true) console.log(true);
if(37) console.log(37);
if(-37) console.log(-37);
if('Mark') console.log('Mark');
if({}) console.log({});
if([]) console.log([]);


//  if () {} else{}

const n = 37;

if(n > 0){
    console.log('n이 0보다 큰 경우');
}

else{
    console.log('n이 0보다 크지 않은 경우');
}

// if () {} else if(){} else{]{}

const n = 15;

if(n % 3 === 0){
    console.log('n은 3의 배수 입니다.');
}
else if ( n % 5 === 0){
    console.log('n은 5의 배수 입니다.');
}

else{
    console.log('n은 3의 배수도 아니고, 5의 배수도 아닙니다.');
}


// n이 3의 배수이면서 5의 배수이면 뭐라고 출력될까요?

if(n % 3 ===0 && n % 5 ===0){
    console.log('n은 15의 배수 입니다.');
}else if(n % 3 ===0){
    console.log('n은 3의 배수입니다.');
}else if(n % 5 === 0){
    console.log('n은 5의 배수입니다.');
}else{
    console.log('n은 3의 배수도 아니고, 5의 배수도 아닙니다.');
}

// 중첩을 이용해서 표현할 수도 있습니다.
if(n % 3 ===0 && n % 5 ===0){
    console.log('n은 15의 배수 입니다.');
}else {
    if(n % 3 ===0){
        console.log('n은 3의 배수입니다.');
    }else if(n % 5 === 0){
        console.log('n은 5의 배수입니다.');
    }else{
        console.log('n은 3의 배수도 아니고, 5의 배수도 아닙니다.');
    }
}

// 표현식 && 표현식

if(true && true){
    console.log('두개 모두 참이면 참');
} 

if(true && false){
    console.log('하나라도 거짓이면 거짓');
}

if(false && false){
    console.log('둘다 거짓이면 거짓');
}


let n = 5;

n % 5 === 0 && console.log('5로 나누어 떨어지면 실행');

n = 7;

n % 5 === 0 && console.log('5로 나누어 떨어지면 실행');
// 표현식 || 표현식

if(true || true){
    console.log('두개 모두 참이면 참');
}

if(true || false){
    console.log('한개라도 참이면 참');
}

if(false || false){
    console.log('한개라도 참이 없으면 거짓');
}


n = 5;

n % 5 === 0 || console.log('5로 나누어 떨어지지 않으면 실행');

n = 7;

n % 5 === 0 || console.log('5로 나누어 떨어지지 않으면 실행');
// ! 표현식
if(!true){
    console.log(false);
}

if(!false){
    console.log(true);
}

// 조건 ? 조건이 참이면 실행되는 표현식 : 조건이 거짓이면 실행되는 표현식
//  중괄호 {} 를 사용할 수 없는 문법이기 떄문에 하나의 표현식만 가능합니다.

n = 5;

console.log(n % 5 === 0 ? '5의 배수 입니다.' : '5의 배수가 아닙니다.');

// 표현식의 결과를 변수에 할당할 수 있습니다.

const message = n % 5 === 0 ? '5의 배수 입니다.' : '5의 배수가 아닙니다.';
console.log(message);

// switch 뒤 괄호 안에 있는 값이 무엇인지 중괄호 안에 있는 코드들을 비교해서 실행합니다.
// 이중에 default: 뒤에 있는 문장은 항상 참이어서 실행되는 블럭입니다.

n = 5;

switch(n) {
    default:{
        console.log(n);
    }
}

// 다음은 n이 5러 나누었을 떄 나머지가 0 인 경우에 실행되는 블럭을 추가한 것입니다.
// case '비교할 값' : 을 이용해서 맞으면 실행됩니다.
//  case 0: 인 경우와 default: 인 경우 두 블럭 모두 순서대로 처리됩니다.

switch(n%5){
    case 0:{
        console.log('n은 5의 배수입니다.');
    }
    default:
        console.log(n);
}

// break와 case문의 순서를 잘 조정하여, 원하는 코드를 만들어 낼 수 있도록 제대로 이해해야한다.

switch(n%5){
    case 0:{
        console.log ('5의 배수입니다.');
        break;
    }
    case 1:
    case 2:
    case 3:
    case 4:
        console.log('5의 배수가 아닙니다.');
    default:
        console.log(n);
}
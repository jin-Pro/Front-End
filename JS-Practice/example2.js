// Boolean

const isTrue = true;
const isFalse = false;

console.log(isTrue, typeof isTrue);
console.log(isFalse,typeof isFalse);

const a = new Boolean(false);

console.log(a, typeof a);

if(a){
    console.log('false');
}

const b = Boolean(false);

console.log(b, typeof b);

if(b){
    console.log('false?');
}
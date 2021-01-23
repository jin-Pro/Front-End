for(let i = 0; i < 5; i++){
    console.log('안녕하세요', i);
}

for(let i = 0, j = 5; i < 5; i++){
    console.log('안녕하세요', i,j);
}

for(let i = 0, j = 2; i<5; j= j*j){
    console.log('안녕하세요', i, j);
}

// 반복문을 즉시 종료하고 싶을 떄는 반복되는 블럭 안에서 break;를 실행한다.

for(let i = 0; i< 5 ; i++){
    console.log(i);
    if( i > 2){
        break;
    }
    console.log('안녕하세요',i);
}

for(;;){
    console.log('안녕하세요');
    if(Math.random() * 100 > 90){
        break;
    }
}

while(true){
    console.log('안녕하세요');
    if(Math.random() * 100 > 90){
        break;
    }
}

do{
    console.log('안녕하세요');
}while(Math.random() * 100 < = 90);

for(const i of [1,2,3]){
    console.log(i);
}

Object.prototype.test = function(){};

for (const i in { a:1 , b:2, c:3 }){
    console.log(i);
}

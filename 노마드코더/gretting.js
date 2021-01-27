const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");


const USER_LS = "currentUser",
SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);     //localStage에 값 저장하기
}

function handleSubmit(event){
    event.preventDefault();     //데이터 전송은 하지 말고
    const currentValue = input.value;       //input에 적힌 value값을 받아온다.
    paintGreeting(currentValue);        //받아온 값 그리기
    saveName(currentValue);         //받아온 값 storage 에 저장하기
}

function askForName(){
    form.classList.add(SHOWING_CN);     //form태그에 display: block 값 넣어서 이름 값 얻기
    form.addEventListener("submit",handleSubmit);       //이름값을 받으면 handleSubmit 실행
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);      //form display:none 값 주기
    greeting.classList.add(SHOWING_CN);     //h4태그에 display:block 값 추가
    greeting.innerText = `Hello ${text}`;       //h4에 인사 넣기
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);      //currentUser에 저장된 값 가져오기

    if(currentUser === null){
        askForName();       //저장된 값이 없다면 askForName 호출하여 물어보기
    }else{
        paintGreeting(currentUser);     //저장된 값이 있다면 paint해주기
    }
}

function init(){
    loadName();     //이름 저장하기
}

init();
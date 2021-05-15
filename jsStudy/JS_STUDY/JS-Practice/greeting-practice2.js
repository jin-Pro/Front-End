const form = document.querySelector("#name-form");
const input = form.querySelector(".js-name");
const writeName = document.querySelector(".print-name");

const show = "show";
const LS_key = "correctUser";


function saveName(name){
    console.log(LS_key);
    console.log(name);
    localStorage.setItem(LS_key,name);
}

function submitName(event){
    const name = input.value;
    event.preventDefault();
    paintName(name);
    saveName(name);
}

function paintName(name){
    input.classList.remove(show);
    writeName.classList.add(show);
    writeName.innerText = `Hello ${name}!!`;
}

function inputName(){
    input.classList.add(show);
    writeName.classList.remove(show);
    form.addEventListener("submit",submitName);
}

function init(){
    const correctUser = localStorage.getItem(LS_key);
    
    if(correctUser === null){
        inputName();
    }else{
        paintName(correctUser);
    }
}

init();
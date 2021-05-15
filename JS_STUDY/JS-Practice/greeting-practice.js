const nameForm = document.querySelector(".js-nameForm");
const input = nameForm.querySelector("input");
const writeName = document.querySelector(".js-writeName");
const correctUser = "correctUser";
const show = "show_on";


function saveName(name){
    localStorage.setItem(correctUser,name);
}

function handling(event){
    event.preventDefault();
    const name = input.value;
    paintName(name);
    saveName(name);
}

function getName(){
    nameForm.classList.add(show);
    nameForm.addEventListener("submit",handling);
}

function paintName(name){
    writeName.innerText = `Hello ${name}!!`;
    writeName.classList.add(show);
    nameForm.classList.remove(show);
}

function select(){
    const userName = localStorage.getItem(correctUser);
    if(userName === null){
        getName();
    }else{
        paintName(userName);
    }
}

function init(){
    select()
}

init();
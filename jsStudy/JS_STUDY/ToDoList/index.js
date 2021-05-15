const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

const hasClass = title.classList.contains(CLICKED_CLASS);

const changeColor = function(){

    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener('click',changeColor);
}

init();
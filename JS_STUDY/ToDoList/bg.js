const body = document.querySelector("body");
const bg = "bg";
const IMG_NUMBER = 4;



function paintImage(number){
    const image = new Image();
    image.classList.add(bg);
    image.src = `js-image/${number}.jpg`;
    body.appendChild(image);
}

function getRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER + 1);
    return number;
}


function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();
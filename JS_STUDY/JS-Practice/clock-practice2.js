const clock = document.querySelector(".js-clock");
const time = clock.querySelector("h1");

function init(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    time.innerText = `${hour}:${minute}:${second}`;
}

init();
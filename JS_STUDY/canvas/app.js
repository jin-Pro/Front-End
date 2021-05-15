const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const color = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const btn = document.getElementById("jsMode");
const save = document.getElementById("jsSave");

canvas.width = 700;
canvas.height = 700;

ctx.fillStyle = "white";    //배경 색상
ctx.fillRect(0,0,canvas.width,canvas.height);   //white로 전체 넣어주기

ctx.fillStyle = "#2c2c2c";  //기본 배경색상 검정
ctx.strokeStyle = "#2c2c2c";    //기본 그림 색상 검정
ctx.lineWidth = 2.5;
let paints = false;

function clickSave(event){
    const image = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS";
    link.click();
}


function changeMode(event){
    if(btn.innerText == "FILL"){
        btn.innerText = "Paint";
    }else{
        btn.innerText = "Fill";
    }
}

function handleRange(event){
    ctx.lineWidth = event.target.value;
}
function changeColor(event){
    const bgColor = event.target.style.backgroundColor;
    ctx.strokeStyle = bgColor;
    ctx.fillStyle = bgColor;
}
function stopPainting(){
    paints = false;
}

function startPainting(event){
    paints = true;
}


function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;

    if(!paints){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else{
        if(btn.innerText == "FILL"){
            ctx.fillRect(0,0,canvas.width,canvas.height);
        }else{
            ctx.lineTo(x,y);
            ctx.stroke();
        }
    }
}

function init(){
    if(canvas){
        canvas.addEventListener("mousemove",onMouseMove);
        canvas.addEventListener("mousedown",startPainting);
        canvas.addEventListener("mouseup",stopPainting);
        canvas.addEventListener("mouseleave",stopPainting);
    }
}

init();

Array.from(color).forEach(colors=>{
    colors.addEventListener("click",changeColor);
})

if(range){
    range.addEventListener("input",handleRange);
}

if(btn){
    btn.addEventListener("click",changeMode);
}

if(save){
    save.addEventListener("click",clickSave);
}
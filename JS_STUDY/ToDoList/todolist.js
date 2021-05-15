const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";  

const toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    toDos.splice(li.id-1,1);
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));       //localStorage에 toDos값 String으로 변환해서 저장하기
}

function paintToDo(text){
    const li = document.createElement("li");        //li태그 만들기
    const delBtn = document.createElement("button");        //button 태그 만들기
    const span = document.createElement("span");        //span태그 만들기
    const newID = toDos.length + 1;     //ID값 만들기
    delBtn.innerText = "X";     //button에 값 넣어주기
    delBtn.addEventListener("click",deleteToDo);    //버튼 클릭하면 지워주는 이벤트 함수
    span.innerText = text;      //span태그에 text값 넣어주기
    li.appendChild(delBtn);     //list태그에 button태그 추가하기
    li.appendChild(span);       //list태그에 span태그 추가하기
    li.id = newID;      //list태그에 id값을 넣어주기
    toDoList.appendChild(li);       //ul태그에 li태그 넣어주기
    const toDoObj = {
        text : text,
        id : newID
    };      //toDos에 넣을 원소? 객체?
    toDos.push(toDoObj);        //toDos에 저장하기
    saveToDos();        //localStorage에 저장하기
}
function handleSubmit(event){
    event.preventDefault();             //전송하지않고
    const currentValue = toDoInput.value;   //입력받은 값을
    paintToDo(currentValue);        //paintToDo로 그려준다.
    toDoInput.value="";         //입력값 받을 준비
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);     //TODOS_LS = toDos 값 가져오기
    if(loadedToDos !== null){                           //값이 없다면
        const parsedToDos = JSON.parse(loadedToDos);    //loadedToDos 를 string에서 object로 변경
        parsedToDos.forEach(function(toDo){     //parsedToDos 원소 하나씩 꺼내서 
            paintToDo(toDo.text);       //paintToDo를 실행하겠다.
        });
    }
}

function init(){
    loadToDos(); //localStorage에서 꺼내와서 그리기
    toDoForm.addEventListener("submit",handleSubmit) //입력받은값 출력하기
}

init();

const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";  

const toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");        //li태그 만들기
    const delBtn = document.createElement("button");        //button 태그 만들기
    const span = document.createElement("span");        //span태그 만들기
    const newID = toDos.length + 1;     //ID값 만들기
    
    delBtn.innerText = "X";
    span.innerText = text;
    li.id = newID;

    li.appendChild(delBtn);
    li.appendChild(span);

    toDoList.appendChild(li);

    const toDoObj = {
         text : text,
         id : newID
    };
    toDos.push(toDoObj);

    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);     //TODOS_LS = toDos 값 가져오기
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        toDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
    
}

function init(){
    loadToDos(); //localStorage에서 꺼내와서 그리기
    toDoForm.addEventListener("submit",handleSubmit);
}

init();

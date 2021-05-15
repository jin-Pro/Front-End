const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector(".js-todo");
const todoList = document.querySelector(".print-todo");

const LS_toDo = "toDo";

const toDos = [];

function deleteList(event){
    const delbtn = event.target;
    const delLi = delbtn.parentNode;
    toDos.splice(delLi.id-1,1);
    todoList.removeChild(delLi);
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(LS_toDo,JSON.stringify(toDos));
}

function paintTodo(name){
    const li = document.createElement("li");
    const btn = document.createElement("button");
    const span = document.createElement("span");
    const newID = toDos.length + 1;
    btn.innerText = "X";
    btn.addEventListener("click",deleteList);
    span.innerText = name;
    li.appendChild(btn);
    li.appendChild(span);
    li.id = newID;
    todoList.appendChild(li);

    const objToDo = {
        name : name,
        id : newID
    }
    toDos.push(objToDo);
    console.log(toDos);

    saveToDos();
}

function submitToDo(event){
    event.preventDefault();
    const name = todoInput.value;
    paintTodo(name);
    todoInput.value = "";
}

function init(){

    const toDo = localStorage.getItem(LS_toDo);
    if(toDo !== null){
        const parsedToDos = JSON.parse(toDo);    //loadedToDos 를 string에서 object로 변경
        parsedToDos.forEach(function(list){     //parsedToDos 원소 하나씩 꺼내서 
            paintTodo(list.name);       //paintToDo를 실행하겠다.
        });
    }
    todoForm.addEventListener("submit",submitToDo);
}

init();
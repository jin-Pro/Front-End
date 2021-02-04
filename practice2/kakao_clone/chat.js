const form = document.querySelector("#chat-form");
const input = form.querySelector("input");
const chatList = document.querySelector(".my-chats");
const LS_chat = "myChat";

const chats = [];

function saveChat(chats){
    localStorage.setItem(LS_chat,JSON.stringify(chats));
}

function printChat(hour,minute,text){
    const li = document.createElement("li");
    li.classList.add("my-chat");
    
    const firstDiv = document.createElement("div");
    firstDiv.classList.add("time");
    firstDiv.innerText = `${hour}:${minute}`;

    const secondDiv = document.createElement("div");
    secondDiv.classList.add("text");
    secondDiv.classList.add("my-text");
    secondDiv.innerText = text;

    li.appendChild(firstDiv);
    li.appendChild(secondDiv);

    chatList.appendChild(li);

    const textObj = {
        hour : hour,
        minute : minute,
        text : text
    }

    chats.push(textObj);
    saveChat(chats);
}

function submitText(event){
    event.preventDefault();

    const text = input.value;
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    
    printChat(hour,minute,text);

    input.value = "";
}

function init(){
    const myChat = localStorage.getItem(LS_chat);
    if(myChat !== null){
        const parseChat = JSON.parse(myChat);
        parseChat.forEach(chat => {
            printChat(chat.hour,chat.minute,chat.text);
        });
    }
    form.addEventListener("submit",submitText);
}

init();
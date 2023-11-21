const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-form input");
const todoList = document.querySelector(".todo-list");
const todoBox = document.querySelector(".todo-box");
const todoSpan = document.querySelector(".todo-form span");

let toDos = [];

const TODOS_KEY = "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function btnClickEvent(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  ///filter 찾아봐라
  li.remove();
  saveToDos();
}

function paintTodo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  todoBox.classList.remove(HIDDEN_CLASSNAME);
  span.innerText = newToDo.text;
  const btn = document.createElement("button");
  btn.innerHTML = "X";
  btn.addEventListener("click", btnClickEvent);
  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);
  todoList.appendChild(li);
}

function todoSubmitEvent(event) {
  event.preventDefault();
  const newToDo = todoInput.value;
  todoInput.value = "";
  const newToDosObject = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDosObject);
  paintTodo(newToDosObject);
  saveToDos();
}
todoForm.addEventListener("submit", todoSubmitEvent);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach(paintTodo);
  toDos = parsedToDos;
  /// arrow function
}

function clickLabel(event) {
  todoBox.classList.toggle(HIDDEN_CLASSNAME);
}
todoSpan.addEventListener("click", clickLabel);

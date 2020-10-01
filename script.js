const todos = document.querySelector(".todo-list");
const addBtn = document.querySelector(".add-btn");
const error = document.querySelector(".error");
const checkBtn = document.querySelectorAll(".check");
const trashBtn = document.querySelectorAll(".trash");
const todoList = document.querySelectorAll(".todo");
const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const body = document.querySelector("body");
let theme = light;

const changeToLightMode = (e) => {
  body.style.background = "var(--lightBg)";
  theme = light;
  trashBtn.forEach((btn) => (btn.style.backgroundColor = "var(--lightOrange)"));
  addBtn.style.backgroundColor = "var(--lightOrange)";
};

const changeToDarkMode = (e) => {
  body.style.background = "var(--darkBg)";
  theme = dark;
  trashBtn.forEach((btn) => (btn.style.backgroundColor = "var(--darkBtn)"));
  addBtn.style.backgroundColor = "var(--darkBtn)";
};

light.addEventListener("click", (e) => changeToLightMode(e));
dark.addEventListener("click", (e) => changeToDarkMode(e));

const checkTodo = (e) => {
  const todo = e.target.parentElement;
  todo.classList.toggle("completed");
};

const removeTodo = (e) => {
  const todo = e.target.parentElement;
  todo.classList.add("deleted");
  todo.addEventListener("transitionend", () => todo.remove());
};

const checkAction = (e) => {
  switch (e.target.className) {
    case "check":
      checkTodo(e);
      break;
    case "trash":
      removeTodo(e);
      break;
  }
};

todos.addEventListener("click", checkAction);

const addTodo = (e) => {
  e.preventDefault();
  error.style.opacity = 0;
  const todoName = document.querySelector(".todo-name");

  if (!todoName.value) {
    error.style.opacity = 1;
    return;
  }

  const todo = document.createElement("div");
  const h2 = document.createElement("h2");
  h2.innerText = todoName.value;
  h2.classList.add("todo-title");

  const checkIcon = document.createElement("i");
  checkIcon.classList.add("fas");
  checkIcon.classList.add("fa-check");
  const checkBtn = document.createElement("button");
  checkBtn.classList.add("check");
  checkBtn.appendChild(checkIcon);

  const trashIcon = document.createElement("i");
  trashIcon.classList.add("fas");
  trashIcon.classList.add("fa-trash");
  const trashBtn = document.createElement("button");
  trashBtn.classList.add("trash");
  trashBtn.appendChild(trashIcon);

  todo.classList.add("todo");
  todo.appendChild(h2);
  todo.appendChild(checkBtn);
  todo.appendChild(trashBtn);

  todos.appendChild(todo);

  todoName.value = "";
};

addBtn.addEventListener("click", (e) => addTodo(e));

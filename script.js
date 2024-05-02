const todoList = [
  {
    name: "make dinner",
    dueDate: "2022-12-22",
  },
  {
    name: "wash dishes",
    dueDate: "2022-12-22",
  },
];

renderTodoList();

todoList.forEach(function (todoObject, index) {
  const { name, dueDate } = todoObject;
  const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${index}, 1);
      renderTodoList();
    " class="delete-todo-button">Delete</button>
    `;
  todoListHTML += html;
});
function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${i}, 1);
      renderTodoList();
    " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  }

  document.querySelector(".todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".due-date-input");

  const dueDate = dateInputElement.value;

  todoList.push({
    name,
    dueDate,
  });

  inputElement.value = "";

  renderTodoList();
}

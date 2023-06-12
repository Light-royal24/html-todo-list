// const todos = [];

function getSavedTodos() {
  // Get the saved list from localStorage
  const todosStr = localStorage.getItem("all_todos");
  return JSON.parse(todosStr) || [];
}

function saveTodos(todos) {
  // Save todos to local storage
  const todosStr = JSON.stringify(todos);
  localStorage.setItem("all_todos", todosStr);
}

function displayTodos() {
  const todos = getSavedTodos();

  const todosHTML = todos
    .map((todo) => {
      return `
      <li class="${todo.completed ? "checked" : ""}">
        <span class="text">${todo.text}</span>
        <span class="close" data-id="${todo.id}">x</span>
      </li>
    `;
    })
    .join("");

  document.getElementById("myTodo").innerHTML = todosHTML;
}

document.addEventListener("DOMContentLoaded", () => {
  displayTodos();
});

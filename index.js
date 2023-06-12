const list = document.querySelector(".list-item ul");

// Delete todo
list.addEventListener("click", (e) => {
  if (e.target.className === "close") {
    const todoID = e.target.dataset.id;

    const allTodos = getSavedTodos();
    const filteredTodos = allTodos.filter(function (todo) {
      if (todo.id != todoID) return todo;
    });

    saveTodos(filteredTodos);
    displayTodos();
  }
});

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
});

list.addEventListener("click", (e) => {
  if (e.target.className === "text") {
    const li = e.target.parentNode;
    li.classList.toggle("checked");
  }
});

const addTodo = document.querySelector("#add-todo");

// console.log(addTodo);

addTodo.addEventListener("submit", (e) => {
  e.preventDefault();

  // get the input field
  const input = document.querySelector("#add");

  // get the value in theinput field
  const inputValue = input.value;

  // if input field is empty
  if (inputValue.trim() == "") {
    // alert pls type in some text
    alert("pls type in some text");
  }

  // create new element
  const li = document.createElement("LI");

  const span = document.createElement("span");
  span.className = "text";

  const removeBtn = document.createElement("span");
  removeBtn.className = "close";

  // append the span created to the li
  li.appendChild(span);
  // append the removeBtn created to li
  li.appendChild(removeBtn);

  // span innerText should be === input field value
  span.innerText = inputValue;
  // removeBtn value should be == x
  removeBtn.innerText = "x";

  // else append li to the list
  list.appendChild(li);

  // clear the input field
  input.value = "";

  storeTodo(inputValue);
});

function storeTodo(todoText) {
  const todos = getSavedTodos();

  const newTodo = {
    id: todos.length + 1,
    text: todoText,
    completed: false,
  };

  // Add new todo to our todos list
  todos.push(newTodo);

  saveTodos(todos);

  // Run the displayTodos function to display all todos
  displayTodos();
}

const list = document.querySelector(".list-item ul");

// de3lete todo

list.addEventListener("click", (e) => {
  if (e.target.className === "close") {
    const li = e.target.parentNode;
    list.removeChild(li);
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
  // console.log(inputValue);

  // create new element
  // console.log(input);
  const li = document.createElement("LI");
  // console.log(li);
  const span = document.createElement("span");
  span.className = "text";
  // console.log(span);
  const removeBtn = document.createElement("span");
  removeBtn.className = "close";
  // console.log(removeBtn);
  // append the span created to the li
  li.appendChild(span);
  // append the removeBtn created to li
  li.appendChild(removeBtn);

  // if input field is empty
  if (inputValue.trim() == "") {
    // alert pls type in some text
    alert("pls type in some text");
  } else {
    // else append li to the list
    list.appendChild(li);
  }

  // span innerText should be === input field value
  span.innerText = inputValue;
  // removeBtn value should be == x
  removeBtn.innerText = "x";

  // clear the input field
  input.value = "";
});

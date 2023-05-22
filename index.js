// Add a new task to the todos list

const todos = [];

// Store the input element in a variable
const inputElement = document.querySelector('#add');

//create a function that will delete todo from todos
function removeTodoFromList(id) {
  // remove the todo form the list
  const filteredTodos = todos.filter(todo => todo.id !== id)

  displayTodos(filteredTodos)
}

// Mark as completed
function checkTodo(id){
  const position = todos.findIndex(todo => todo.id === id)
  const checkboxButton = document.getElementById('check-button-'+ id)

  const todo = todos[position]

  // If todo is not completed
  if(!todo.completed) {
    // Change icon to check icon
    checkboxButton.innerHTML = '<ion-icon name="checkbox-outline" size="small"></ion-icon>';
    
    // Change the todo.completed to true
    todo.completed = true;
  } else {
    // Change icon to square
    checkboxButton.innerHTML = '<ion-icon name="square-outline" size="small"></ion-icon>';
    todo.completed = false;
  }
}

// Display all todos in todos list
function displayTodos(todos) {

  // Get the element to display the todos in
  const listItems = document.getElementById("list-items");
  
  // Clear the todos that have been displayed
  listItems.innerHTML = "";

  // Loop through todos list
  todos.forEach(todo => {
    // For each todo
    // Create a div with a class of list-item
    const listItemDiv = document.createElement('div')
    listItemDiv.classList.add('list-item');
    
    if (todo.completed) {
      listItemDiv.classList.add('completed');
    }
    
    // Put a div inside the listItemDiv
    const innerDiv = document.createElement('div')
    listItemDiv.appendChild(innerDiv);
    
    // Put an input with a type of checkbox inside the innerDiv
    const checkButton = document.createElement('button')
    checkButton.setAttribute('id', `check-button-${todo.id}`)
    checkButton.innerHTML = '<ion-icon name="square-outline" size="small"></ion-icon>'
    
    if (todo.completed) {
      checkButton.innerHTML = '<ion-icon name="checkbox-outline" size="small"></ion-icon>'
    }

    innerDiv.appendChild(checkButton)

    checkButton.addEventListener('click', () => {
      checkTodo(todo.id)

      if (todo.completed) {
        listItemDiv.classList.add("completed")
      } else {
        listItemDiv.classList.remove("completed")
      }
    })
    
    // Put span with todo.text inside
    const todoText = document.createElement('span')
    todoText.innerText = todo.text;

    innerDiv.appendChild(todoText);

    // Put button inside listItemDiv
    const removeBtn = document.createElement('button')
    removeBtn.innerHTML = "<ion-icon name='close-circle-outline'></ion-icon>"
    
    //add event listener for the delete button
    removeBtn.addEventListener('click', () => {
      // call the function you created
      removeTodoFromList(todo.id)
    })

    // Append the listItemDiv inside listItemsDiv
    listItemDiv.appendChild(removeBtn);
   
    // Append each todo to the bottom of the listItems
    listItems.appendChild(listItemDiv);

  });
  
}

// Event listener to add new todo from input
inputElement.addEventListener('keyup', function(e) {

  // if the key code is not 13 dont run this function
  if (e.keyCode === 13) {
    // Make sure the text is not empty
    
    // Create a new object with the text of the input and completed as false
    const text = inputElement.value;
    
    // Dont add empty texts
    if (text === '') return

    const newObject = {
      text: text,
      completed: false,
      id: todos.length + 1
    };

    // Add this new todo object to the list of todos
    todos.push(newObject);
    
    // clear the input field
    inputElement.value = "";
    
    //display display todos
    displayTodos(todos);
  }
})

displayTodos(todos)
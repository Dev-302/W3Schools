function updateCounters() {
    // Total number of todos
    const totalCount = document.getElementById("total-count");
    const totalTodos = document.getElementsByClassName("todo").length;
    totalCount.innerHTML = totalTodos;
  
    // Total number of completed todos
    const completedCount = document.getElementById("completed-count");
    const completedTodos = document.getElementsByClassName("completed").length;
    completedCount.innerHTML = completedTodos;
  
    // Total number of uncompleted todos
    const todoCount = document.getElementById("todo-count");
    const uncompletedTodos = totalTodos - completedTodos;
    todoCount.innerHTML = uncompletedTodos;
  }
  
  updateCounters();

function toggleDone(event) {
    const checkbox = event.currentTarget;
    // check the checked status of the checkbox
    if (checkbox.checked) {
      // the "completed" class is set on the parent element, the <li>
      checkbox.parentElement.parentElement.className = "todo completed";
    } else {
      checkbox.parentElement.parentElement.className = "todo";
    }
  
    updateCounters();
  }
  
  const checkboxes = document.querySelectorAll(".todo input");
  
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", toggleDone);
  }

 function createTodo() {
   // Create a label
   
   // create a checkbox
   // add the "change" event listener to the checkbox
   // and append the checkbox to the label

   // create a text node with the given title
   // and appent the text node to the label

   // create a list item
   // and append the label to list item

   // append the list item to the todo list
 }
 
  document
    .querySelector("form")
    .addEventListener("submit", function addNewTodo(event) {
      event.preventDefault();

      const inputField = document.querySelector("#new-todo");
      const newTodoTitle = inputField.value;
      createTodo(newTodoTitle);

      // reset the value of the inputField to make it empty and
      // ready to create new todos
      inputField.value = null;

      updateCounters();
    });

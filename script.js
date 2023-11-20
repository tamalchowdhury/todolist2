const todoList = ["take the class", "take haircut", "take a walk"]

function displayTodo() {
  const todoListElement = document.querySelector("#todo-list")
  todoListElement.innerHTML = ""

  todoList.forEach((item, index) => {
    const todoElement = document.createElement("div")
    todoElement.textContent = item 
    todoElement.setAttribute("class", "todo-item")

    const editButton = document.createElement("button")
    editButton.textContent = "Edit"
    editButton.addEventListener("click", () => editTodo(index))

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete"
    deleteButton.addEventListener("click", () => deleteTodo(index))


    todoElement.appendChild(editButton)
    todoElement.appendChild(deleteButton)

    todoListElement.appendChild(todoElement)
  })


}

displayTodo()

function addTodo(todoText) {
  todoList.push(todoText)
  displayTodo()
}

function editTodo(id) {
  const newText = prompt("Enter a new todo text")

  if(newText) {
    todoList[id] = newText
    displayTodo()
  }
}

function deleteTodo(id) {
  todoList.splice(id, 1)
  displayTodo()
}

function handleFormSubmit(event) {
  event.preventDefault()
  const todoText = event.target.todo.value 
  addTodo(todoText)

}

const form = document.querySelector("#form")
form.addEventListener("submit", handleFormSubmit)
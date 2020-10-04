//selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//eventlistners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteTodo)

//functions

function addTodo(event)
{
    //prevent from submitting
    event.preventDefault();

    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //adding li to todo lists
    const newTodo = document.createElement("li");
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //checkmark button

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

     //trash button

     const trashButton = document.createElement('button');
     trashButton.innerHTML = '<i class="fas fa-trash"></i>'
     trashButton.classList.add("trash-btn");
     todoDiv.appendChild(trashButton);

     //append it to todo list

     todoList.appendChild(todoDiv);
}

function deleteTodo(event){

    const item = event.target;

    //delete to do list
    if(item.classList[0]=="trash-btn")
    {
        const todo = item.parentElement;
        todo.remove();
    }
    //to mark it as completed
    if(item.classList[0]=="complete-btn")
    {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
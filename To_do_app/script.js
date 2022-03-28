const form = document.getElementById('form');
const input = document.getElemnetById('input');
const todosUL = document.getElementById('todos');
const todos = JSON.parse(localStorage.getItem("todos"));


form.addEventListerner('submit', (e) => {
    e.preventDefault();
    addTodo();
});


function addTodo(todo){
    let todoText = input.Value;
    
    if (todo){
        todoText = input.value;
    }

    if (todoText) {
        const todoEl = document.createElement("li")
        if(todo && todo.completed){
            todoEl.classList.add("completed");}
    }

    todoEl.innerText = todoText;


    todoEl.addEventListerner("contextmenu", (e)=>{
        e.preventDefault();})



    const todoText = input.Value;
    if(todoText){
        const todoEL = document.createElement('li')
        todoEL.innerText = todo;
        todos.appendChild(todo);
        
    }
}
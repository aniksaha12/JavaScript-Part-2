// document.createElement()
// append
// prepend
// remove

// const newTodoItem = document.createElement("li");
// // const newTodoItemText = document.createTextNode("Teach Students");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// // newTodoItem.appendChild(newTodoItemText);
// todoList.append(newTodoItem); // append will add Todo in last 
// // todoList.prepend(newTodoItem); // prepend will add todo in starting

// console.log(newTodoItems);

// remove
// const todo1 = document.querySelector('.todo-list li');
// todo1.remove();
// console.log(todo1);

// before
// after

const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach students";
const todoList = document.querySelector(".todo-list");
todoList.before(newTodoItem);
// how to get dimension of a element
// height width

const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect().height
console.log(info);
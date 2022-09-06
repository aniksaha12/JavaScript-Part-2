// static list vs live list


// querySelectorAll gives us static list 
// getElementsBySomething gives us live list

const ul = document.querySelectorAll(".todo-list");
const listItems = ul.getElementsByTagName("li");

const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";

ul.append(sixthLi);
console.log(listItems);
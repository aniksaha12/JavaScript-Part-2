// get multiple elements using getElements by class name
// get multiple elements items using querySelectorAll
// const navItems = document.getElementsByClassName("nav-item"); // HTMLCollection
// console.log(navItems);
// console.log(Array.isArray(navItems));
const navItems = document.querySelector(".nav-item");  //Nodelist
console.log(navItems[0]);
// loop

// get multiple elements using getElements by class name
//  get multiple elements items using querySelectorAll
// array like object ---> indexing, length property

// const navItems = document.getElementsByTagName("a"); // HTMLCollection
// console.log(navItems);
// we can't use forEach method to iterate  through HTMLCollecetion
// simple for loop
// for of loop
// forEach

// for(let i=0; i< navItems.clientHeight; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundcolor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// for(let navItem of navItem){
//     navItem.style.backgroundcolor="#fff";
//     navItem.style.color="green";
//     navItem.style.fontWeight="bold";
// }

// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));
// navItems.forEach((navItems) =>{
//     navItem.style.backgroundcolor="#fff";
//     navItem.style.color="green";
//     navItem.style.fontWeight="bold";
// })

// console.log(Array.isArray(navItems));
// const navItems = document.querySelector(".nav-item");  //Nodelist
// console.log(navItems[0]);

let navItems = document.querySelectorAll("a");
navItems = Array.from(navItems);
console.log(Array.isArray(navItems));
// simple for loop
// for of loop
// forEach
// for(let i=0; i< navItems.clientHeight; i++){
//         console.log(navItems[i]);
//         const navItem = navItems[i];
//         navItem.style.backgroundcolor = "#fff";
//         navItem.style.color = "green";
//         navItem.style.fontWeight = "bold";
    // }
    // for(let navItem of navItem){
    //         navItem.style.backgroundcolor="#fff";
    //         navItem.style.color="green";
    //         navItem.style.fontWeight="bold";
    //     }

// console.log(navItems);
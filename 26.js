// keypress event
// mouseover event

// const body = document.body;

// body.addEventListener("keypress", (e)=> {
//     console.log(e.key);
// })

// mouseover event

const body = document.body;

const mainButton = document.querySelector(".btn-headline");
// console.log(mainButton);
mainButton.addEventListener("mouseover", (e)=>{
    console.log("mouseover event ocurred !!!");
});

mainButton.addEventListener("mouseleave", ()=>{
    console.log("mouseleave even ocurred!!!");
})

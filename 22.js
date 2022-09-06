// event object

// const firstButton = document.querySelector("#one");



// firstButton.addEventListener("click", function(event){
//     console.log(event);
// })

// when we add element in any eventListener 
// so the Js Engine --- line by line do execute 
// browser --- js engine + extra features
// browser ---- js Engine + WebApi


// when browser is knew that user perform the event
// which we are listen
// browser --- 2
// 1.) callback function hai vo js Engine ko degi
// 2.) callback function ke sath browser jo event hua hai uski information bhi dega
//  this info we can get as a form of object


const allButtons = document.querySelectorAll(".my-buttons button");

for(let button of allButtons){
    button.addEventListener("click",(e)=>{
        console.log(e.currentTarget);
    })
}
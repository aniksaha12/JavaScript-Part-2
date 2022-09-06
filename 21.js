const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons);
// firstButton.addEventListener("click", function(){
//     console.log("you clicked me")
// })

// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         console.log(this.textContent);
//     })
// }


// for loop

// for(let i=0 ; i< allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this);
//     })
// }


// forEach
allButtons.forEach(function(button){
    button.addEventListener("click", function(){
        console.log(this);
    });
})
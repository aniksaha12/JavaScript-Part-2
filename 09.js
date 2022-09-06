//  closure example

function func(){
    let counter = 0;
    return function(){
        if(counter < 1){
        console.log("hi you Called me");
        counter++;
    }else{
        console.log("Mai already ek bar call ho chuki hu");
        }
    }
}

const myFunc = func();
myFunc();
myFunc();

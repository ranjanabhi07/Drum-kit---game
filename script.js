// document.querySelectorAll("button")[0].addEventListener("click",function() {alert("I got click!");});
// document.querySelectorAll("button")[1].addEventListener("click",function() {alert("I got click!");});
// document.querySelectorAll("button")[2].addEventListener("click",function() {alert("I got click!");});
// document.querySelectorAll("button")[3].addEventListener("click",function() {alert("I got click!");});
// document.querySelectorAll("button")[4].addEventListener("click",function() {alert("I got click!");});
// document.querySelectorAll("button")[5].addEventListener("click",function() {alert("I got click!");});
// document.querySelectorAll("button")[6].addEventListener("click",function() {alert("I got click!");});

// Detecting Button press

var noOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0 ; i<noOfDrumButtons;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function() {

       var buttonInnerHTML =  this.innerHTML;

       makeSound(buttonInnerHTML);

       buttonAnimation(buttonInnerHTML);

    });
}

// detecting keyboard press

document.addEventListener("keydown",function(event){

    makeSound(event.key);

    buttonAnimation(event.key);

})


function makeSound(key) {
    switch (key) {

        case "w" : 
             var tom1 = new Audio("sounds/tom-1.mp3");
             tom1.play();
             break;
        
        case "a" :
             var tom4 = new Audio("sounds/tom-4.mp3");
             tom4.play();
             break;

        case "s":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
            
        case "d":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "j":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
            
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        default: alert("Key:"+key+" does not exists!");

       }
}

        // added function to add animation
function buttonAnimation(currentKey){
    
        // add class
        var activeButton = document.querySelector("."+currentKey);

        activeButton.classList.add("pressed");

        // remove class using timeOut
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        },100);
}
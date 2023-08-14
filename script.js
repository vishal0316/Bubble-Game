// Get the bubble element
const bubble = document.querySelector('.bubble');

// Add a click event listener to the bubble element
bubble.addEventListener('click', () => {
    // Check if the device supports the Vibration API
    if ('vibrate' in navigator) {
        // Vibrate for 100 milliseconds
        navigator.vibrate(100);
    }
});


var timer = 60;
var score = 0;

function increaseScore() {
    score 
}


function getNewHit() {
    var rn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = rn;
}



function makeBubble(){
    var clutter = "";

    for(var i = 1;  i<=168 ; i++){
       var rn =  Math.floor(Math.random()*10)
        clutter +=  `<div class="bubble">${rn}</div>` ;
    }
    
    document.querySelector(".pbtm").innerHTML = clutter;
}
 


function runTimer() {
 var timerint = setInterval(function(){
    if (timer > -0){
    timer--;
    document.querySelector("#timerval").textContent = timer;
    }
    else{
        clearInterval(timerint);
    }
}, 1000);
}



runTimer();
makeBubble();
getNewHit();
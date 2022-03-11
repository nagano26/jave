
let watchArea = document.getElementById("watchArea");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");


let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds= 0;

let interval;


function stopWatch(){
    milliseconds++;
    if(milliseconds/10==1){
        seconds++;
        milliseconds=0;
        if(seconds/60 ==1){
            minutes++;
            seconds=0;
            if(minutes/60 ==1){
                hours++;
                minutes=0;
            }
        }
    }
    watchArea.innerHTML = hours + ":" + minutes + ":" + seconds + ":"+ milliseconds
    
};
    
    
start.addEventListener("click", function() {
    interval=setInterval(stopWatch, 100);
    start.disabled = true;
    stop.disabled =false;
    reset.disabled=false;
    
    
});

stop.addEventListener("click",function(){
    clearInterval(interval);
    start.disabled = false;
    stop.disabled =true;
    
});


reset.addEventListener("click",function() {
    clearInterval(interval);
    watchArea.innerHTML="0:0:0:0";
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    reset.disabled =true;
});

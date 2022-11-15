const stopwatch = document.querySelector(".stopwatch");
const play = document.querySelector("#play");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

let isClicked = false;
let interval;

let hour = 0;
let minute = 0;
let second = 0;

let zs = "0"
let zm = "0"
let zh = "0"

play.addEventListener("click", ( ) => { 
    if(isClicked === true){ return};
    isClicked = true;
    
    interval  = setInterval(() => {
        second+= 1;

        if(second === 60){
            second = 0;
            minute += 1;
        };
    
        if(minute === 60){
            minute = 0;
            hour += 1;
        };

        if(second >= 10){
            zs = "";
        }else {
            zs = "0"
        };

        if(minute >= 10){
            zm = "";
        }else {
            zm= "0"
        };

        if(hour >= 10){
            zh = "";
        }else{
            zh = "0"
        };

        stopwatch.textContent = `${zh + hour}:${zm+ minute}:${zs + second}`
    }, 1000);
});


stop.addEventListener("click", () => { 
    isClicked = false;

    clearInterval(interval);
});

reset.addEventListener("click", () => {
    isClicked = false;

    clearInterval(interval);
    hour = 0;
    minute = 0;
    second = 0;
    stopwatch.textContent = "00:00:00"
});
"use strict";

//globals
var wakeUpTime = 8;
var goToSleepTime = 22;

//debug switch
var DEBUG = true;

function init() {
    setInterval(updateClocks, 1000);

    var statusLineSelector =  document.getElementById("statusLineSelector");

    var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
    wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

    var goToSleepSelector =  document.getElementById("goToSleepSelector");
    goToSleepSelector.addEventListener("change", goToSleepEvent);

    updateClocks();
    updateStatusLine();

    //debug message
    if (DEBUG) {console.log("Init done, the page is running.");}
}

function wakeUpEvent() {
    wakeUpTime = wakeUpTimeSelector.value;
    updateStatusLine();
}

function goToSleepEvent() {
    goToSleepTime = goToSleepSelector.value;
    updateStatusLine();
}

function updateStatusLine() {
    statusLineSelector.innerText = "Waking up at: " + formatTime(wakeUpTime) 
                                + " and going back to bed at: " + formatTime(goToSleepTime);
}
function updateClocks() {
    var clock = document.getElementById("clock");
    var timer = new Date;
    var hour = formatTime(timer.getHours());
    var minutes = formatTime(timer.getMinutes());
    var seconds = formatTime(timer.getSeconds());

    clock.innerText = hour + ":" + minutes + ":" + seconds;
    
}

function formatTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
"use strict";

//globals
var wakeUpTime = 8;
var goToSleepTime = 22;
var activeAlarm = false;

//debug switch
var DEBUG = true;

function init() {
    setInterval(updateClocks, 1000);

    var statusLineSelector =  document.getElementById("statusLineSelector");
    var greetingLineSelector = document.getElementById("greetingLineSelector");

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

    //debug message
    if (DEBUG) {console.log("wakeUpEvent occured.");}
}

function goToSleepEvent() {
    goToSleepTime = goToSleepSelector.value;
    updateStatusLine();

    //debug message
    if (DEBUG) {console.log("goToSleep occured.");}
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
    greetingLineSelector.innerText = getGreeting( timer.getHours() );

    if ((timer.getHours() === parseInt(wakeUpTime)) && (activeAlarm === false)) {
        alert(hour + " o'clock - time to wake up!");
        activeAlarm = true;
        if (DEBUG) {console.log("WakeUp alarm triggered!")}
    }
    
    if ((timer.getHours() === parseInt(goToSleepTime)) && (activeAlarm === false)) {
        alert(hour + " o'clock - time to go to bed!");
        activeAlarm = true;
        if (DEBUG) {console.log("goToSleep alarm triggered!")}
    }

    if ((timer.getHours() != wakeUpTime) && (timer.getHours() != goToSleepTime)  && (activeAlarm === true)){
        activeAlarm = false;
    }
}

function formatTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function wakeUpAlarm() {
    console.log("Good morning!");
}

function wakeUpAlarm() {
    console.log("Good night!");
}

function getGreeting( time ) {
    if ((time < 12) && (time > 5)) {
        return "Good morning!";
    } else if ((time < 18) && (time > 11)) {
        return "Good afternoon!";
    } else {
        return "Good evening and good night!";
    }
}
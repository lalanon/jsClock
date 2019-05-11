"use strict";

function init() {
    setInterval(displayClock, 1000);
}

function displayClock() {
    var clock = document.getElementById("clock");
    var timer = new Date;
    var hour = formatTime(timer.getHours());
    var minutes = formatTime(timer.getMinutes());
    var seconds = formatTime(timer.getSeconds());

    clock.innerHTML = hour + ":" + minutes + ":" + seconds;
}

function formatTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
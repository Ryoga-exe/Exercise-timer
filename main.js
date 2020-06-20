let soundH = new Audio("sounds/beepHigh.wav");
let soundL = new Audio("sounds/beepLow.wav");

function playbeep(isHigh=false) {
    isHigh ? soundH.play() : soundL.play();
}
let count = 0;
let times = 0;
let num = 0;

let counter = 0;
let isRunning = false;
window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("start").onclick = function() {
        if (!isRunning){
            times = document.getElementById("inputTimes").value;
            num = document.getElementById("inputNumber").value;
            isRunning = true;
            counter = 0;
            foofoo();
        }
    }
})

function foofoo() {
    let hoge = (count % times == 0);
    playbeep(hoge);
    count++;
    document.getElementById("circled").classList.toggle("animation1");
    if (hoge) counter++;
    if (counter < num)
        window.setTimeout("foofoo()", 600);
    else isRunning = false;
}
let soundH = new Audio("sounds/beepHigh.wav");
let soundL = new Audio("sounds/beepLow.wav");

function playbeep(isHigh=false) {
    isHigh ? soundH.play() : soundL.play();
}
let count = 0;
window.addEventListener("DOMContentLoaded", function() {

    document.getElementById("start").onclick = function() {
        playbeep(count%5==0);
        count++;
    }
})
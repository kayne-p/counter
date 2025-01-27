let numLabel = document.getElementById("numLabel");
let incrementBtn = document.getElementById("incrementBtn");
let decrementBtn = document.getElementById("decrementBtn");
let resetBtn = document.getElementById("resetBtn");
let allowNegBtn = document.getElementById("allowNegativeBtn");
var num = 0;
var allowNeg = false;

incrementBtn.onclick = function() {
    num++;
    numLabel.innerText = num;
}

decrementBtn.onclick = function() {
    if (num > 0 || num <= 0 && allowNeg) {
        num--;
        numLabel.innerText = num;
    }
}

resetBtn.onclick = function() {
    num = 0;
    numLabel.innerText = num;
}

allowNegBtn.onclick = function() {
    allowNeg = !allowNeg;
    if (allowNeg) {
        allowNegBtn.style = "background-color: #00ff00;";
    }
    else {
        allowNegBtn.style = "background-color: #ff0000;";
    }
}
let numLabel = document.getElementById("numLabel");
let incrementBtn = document.getElementById("incrementBtn");
let decrementBtn = document.getElementById("decrementBtn");
let resetBtn = document.getElementById("resetBtn");
var num = 0;

incrementBtn.onclick = function() {
    num++;
    numLabel.innerText = num;
}

decrementBtn.onclick = function() {
    if (num > 0) {
        num--;
        numLabel.innerText = num;
    }
}

resetBtn.onclick = function() {
    num = 0;
    numLabel.innerText = num;
}
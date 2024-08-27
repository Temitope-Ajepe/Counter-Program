const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const labelCount = document.getElementById("labelCount")
let count = 0;

decreaseBtn.onclick = function () {
    count--;
    labelCount.textContent = count;
}

increaseBtn.onclick = function () {
    count++;
    labelCount.textContent = count;
}

resetBtn.onclick = function () {
    count = 0;
    labelCount.textContent = count;
}
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const countLabel = document.getElementById("countLabel");
let count = 0;

increase.onclick = function() {
    count++;
    countLabel.textContent = count;
    
    if (count > 0) {
        countLabel.style.color = "green"; // Green for positive numbers
    } else if (count < 0) {
        countLabel.style.color = "red"; // Red for negative numbers
    } else {
        countLabel.style.color = "black"; // Black for zero
    }
}

decrease.onclick = function() {
    count--;
    countLabel.textContent = count;
    
    if (count > 0) {
        countLabel.style.color = "green"; 
    } else if (count < 0) {
        countLabel.style.color = "red"; 
    } else {
        countLabel.style.color = "black"; 
    }
}

reset.onclick = function() {
    count = 0;
    countLabel.textContent = count;
    countLabel.style.color = "black";
}
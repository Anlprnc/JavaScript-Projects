const nums = document.getElementById("nums");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
let count = 0;


decrease.addEventListener("click", () => {
    count--;
    nums.textContent = count;
    colorChange();
})

reset.addEventListener("click", () => {
    count = 0;
    nums.textContent = count;
    colorChange();
})

increase.addEventListener("click", () => {
    count++;
    nums.textContent = count;
    colorChange();
})

const colorChange = () => {
    if(count > 0) {
        nums.style.color = "green";
    } else if (count < 0) {
        nums.style.color = "red";
    } else {
        nums.style.color = "black";
    }
};
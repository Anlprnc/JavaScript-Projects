const button = document.getElementById("btn");
const colorName = document.querySelector(".color-name");

button.addEventListener("click", () => {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorName.textContent = randomColor;
});

const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const red = 86;
const green = 33;
const blue = 75;

const header = document.getElementById("header");
console.log(header.innerText)

function changeColor() {
    console.log(window.scrollY)

}

function changeColor() {
    const scrollFactor = 1 + window.scrollY / 400;

    const r = red / scrollFactor;
    const g = green / scrollFactor;
    const b = blue / scrollFactor;

    const updatedColor = `rgb(${r}, ${g}, ${b})`;

    header.style.backgroundColor = updatedColor;
}

changeColor()
window.addEventListener('scroll', changeColor)
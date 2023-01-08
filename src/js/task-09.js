function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor());

const changeColorButton = document.querySelector(".change-color");
const valueColor = document.querySelector(".color");

changeColorButton.addEventListener("click", changeColor);

function changeColor() {
  valueColor.textContent = getRandomHexColor();
  changeColorButton.style.background = getRandomHexColor();
}

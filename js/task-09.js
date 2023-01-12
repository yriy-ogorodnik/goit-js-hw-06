function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor());

const changeColorButton = document.querySelector(".change-color");
const valueColor = document.querySelector(".color");

changeColorButton.addEventListener("click", onchangeColor);

function onchangeColor() {
  let colorValue = getRandomHexColor();
  valueColor.textContent = colorValue;
  document.body.style.background = colorValue;
}

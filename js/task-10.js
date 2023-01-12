const form = document.querySelector("#controls");
const inputForm = form.firstElementChild;
const boxes = document.querySelector("#boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

createBtn.addEventListener("click", createDiv);

function createDiv() {
  const element = createBoxes(inputForm.value);
  boxes.append(...element);
}

destroyBtn.addEventListener("click", destroyBoxes);

// ------------------------------------------------------------------
function createBoxes(amount) {
  const add = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    add.push(div);
  }
  return add;
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const text = document.querySelector("#text");
const fontSizeText = document.querySelector("#font-size-control");

fontSizeText.addEventListener("input", onInput);

function onInput() {
  text.style.fontSize = fontSizeText.value + "px";
}

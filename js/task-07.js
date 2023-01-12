const text = document.querySelector("#text");
const fontSizeText = document.querySelector("#font-size-control");
console.log("fontSizeText", fontSizeText);

fontSizeText.valueAsNumber = 0;

fontSizeText.addEventListener("input", () => {
  text.style.fontSize = fontSizeText.value + "px";
});

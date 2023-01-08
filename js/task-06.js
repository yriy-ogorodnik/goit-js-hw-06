const form = document.querySelector("#validation-input");
console.log("form", form);

const amountSymbol = form.getAttribute("data-length");

const llenghtSymbol = parseInt(amountSymbol, 10);

form.addEventListener("blur", onInputBlur);

function onInputBlur() {
  if (form.value.length === llenghtSymbol) {
    form.classList.remove("invalid");
    form.classList.add("valid");
  }
  if (form.value.length === 0) {
    form.classList.remove("invalid");
    form.classList.remove("valid");
  }
  if (form.value.length !== llenghtSymbol && form.value.length !== 0) {
    form.classList.add("invalid");
  }
}

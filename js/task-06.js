const form = document.querySelector("#validation-input");
console.log("form", form);

const amountSymbol = form.getAttribute("data-length");

// const llenghtSymbol = Number(amountSymbol);
const llenghtSymbol = +amountSymbol;

form.addEventListener("blur", onInputBlur);

function onInputBlur() {
  processCall();
  stringValidation();

  if (form.value.length === 0) {
    form.classList.remove("invalid");
    form.classList.remove("valid");
  }
}

function processCall() {
  if (form.value.length === llenghtSymbol) {
    form.classList.remove("invalid");
    form.classList.add("valid");
  }
}

function stringValidation() {
  if (form.value.length !== llenghtSymbol && form.value.length !== 0) {
    form.classList.add("invalid");
  }
}

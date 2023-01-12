const refs = {
  input: document.querySelector("#name-input"),

  nameLabel: document.querySelector("#name-output"),
};
console.log("input", refs.input);
console.log("nameLabel", refs.nameLabel);

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  // refs.nameLabel.textContent = event.currentTarget.value;

  if (refs.input.value.trim() === "") {
    return (refs.nameLabel.innerHTML = "Anonymous");
  }
  refs.nameLabel.textContent = event.currentTarget.value;
}

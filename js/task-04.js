const actions = document.querySelector("#counter");

const removeOneBtn = document.querySelector('[data-action="decrement"]');

const addOneBtn = document.querySelector('[data-action="increment"]');

const actualValue = document.querySelector("#value");
console.log("actualValue", actualValue);
//  ____________________________________________
let counterValue = 0;
const increment = () => {
  counterValue += 1;

  document.getElementById("value").textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  document.getElementById("value").textContent = counterValue;
};
// --------------------------------------

addOneBtn.addEventListener("click", increment);
removeOneBtn.addEventListener("click", decrement);


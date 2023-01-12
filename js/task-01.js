const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);

categories.forEach(number => {
  console.log("Category:", number.firstElementChild.textContent);
  console.log("Elements:", number.lastElementChild.children.length);
});

// _____________2__________
// function filterArray(numbers) {
//   numbers.forEach(function (number){
//     console.log("Category:", number.firstElementChild.textContent)
//     console.log("Elements:", number.lastElementChild.children.length)
//   })

// }

// filterArray(categories)

// ______________3_________
// categories.forEach(function(number){
//   console.log("Category:", number.firstElementChild.textContent)
//     console.log("Elements:", number.lastElementChild.children.length)
// })

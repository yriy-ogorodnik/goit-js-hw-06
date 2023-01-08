const categories = document.getElementsByClassName("item");
console.log(`Number of categories: ${categories.length}`);

const ulCategories = document.querySelectorAll(".item h2");
const liCategories = document.querySelectorAll(".item ul");

// for (const client of ulCategories) {
//    console.log(`Category: ${client.textContent}`);
//  }

console.log(`Category: ${ulCategories[0].textContent}`);
console.log(`Elements: ${liCategories[0].children.length}`);

console.log(`Category: ${ulCategories[1].textContent}`);
console.log(`Elements: ${liCategories[1].children.length}`);

console.log(`Category: ${ulCategories[2].textContent}`);
console.log(`Elements: ${liCategories[2].children.length}`);

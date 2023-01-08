const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const element = ingredients.map(ingr => {
  const liEl = document.createElement("li");
  liEl.textContent = ingr;
  liEl.classList.add("item");
  console.log("liEl", liEl);

  return liEl;
});

list.append(...element);

// Напиши скрипт, який для кожного елемента масиву ingredients:

// 1 Створить окремий елемент <li>. Обов'язково використовуй метод
// document.createElement().

// 2 Додасть назву інгредієнта як його текстовий вміст.

// 3 Додасть елементу клас item.
// 4 Після чого, вставить усі <li> за одну операцію у список
//  ul#ingredients.
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listIngredients = ingredients.map((ingredient) => {
  const newList = document.createElement("li");
  newList.textContent = ingredient;
  newList.classList.add("item");
  return newList;
});
const general = document.querySelector("#ingredients");
general.append(...listIngredients);
console.log(listIngredients);

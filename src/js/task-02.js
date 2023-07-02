const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listIngredients = ingredients.map((ingredient) => {
  const NewList = document.createElement("li");
  NewList.textContent = ingredient;
  NewList.classList.add("item");
  return NewList;
});
const general = document.querySelector("#ingredients");
general.append(...listIngredients);
console.log(listIngredients);

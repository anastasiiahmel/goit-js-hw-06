
const NumberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories:  ${NumberOfCategories.length}`);

NumberOfCategories.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length} `);
});

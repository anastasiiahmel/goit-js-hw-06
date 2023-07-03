function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");
console.dir(body);
const changeBtn = document.querySelector(".change-color");
const nameColor = document.querySelector(".color");
changeBtn.addEventListener("click", changeColor);
function changeColor(event) {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  nameColor.textContent = newColor;
}


const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const span = document.querySelector("#value");

btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);
let counterValue = 0;
function decrement() {
  span.textContent = counterValue -= 1;
}

function increment() {
  span.textContent = counterValue += 1;
}

const elementInput = document.querySelector("#validation-input");
elementInput.addEventListener("blur", handleInput);

const inputLength = Number(elementInput.dataset.length);
console.log(inputLength);
function handleInput() {
  if (elementInput.value.length === inputLength) {
    elementInput.classList.add("valid");
    elementInput.classList.remove("invalid");
  } else {
    elementInput.classList.add("invalid");
    elementInput.classList.remove("valid");
  }
}

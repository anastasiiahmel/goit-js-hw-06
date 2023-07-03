const controlSize = document.querySelector("#font-size-control");
const controlText = document.querySelector("#text");
controlSize.addEventListener("input", handleControl);

function handleControl() {
  controlText.style.fontSize = `${controlSize.value}px`;
}

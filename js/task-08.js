const userForm = document.querySelector(".login-form");
userForm.addEventListener("submit", onFormSubmit);
function onFormSubmit(elmt) {
  elmt.preventDefault();
  const elementsForm = elmt.currentTarget.elements;
  const email = elementsForm.email.value;
  const password = elementsForm.password.value;
  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }
  const form = {
    email,
    password,
  };
  console.log(form);
  elmt.currentTarget.reset();
}

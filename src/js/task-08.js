const userForm = document.querySelector(".login-form");
userForm.addEventListener("submit", onFormSubmit);
function onFormSubmit(elmt) {
  elmt.preventDefault();
  const ElementsForm = elmt.currentTarget.elements;
  const email = ElementsForm.email.value;
  const password = ElementsForm.password.value;
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

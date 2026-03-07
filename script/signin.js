loginFormElem.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value;
  const password = passworInput.value;

  if (name === "admin" && password === "admin123") {
    formContainer.classList.add("hidden");
    homepage.classList.remove("hidden");
  } else {
    alert("Invalid username or password");
  }
});

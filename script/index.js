const loginFormElem = document.getElementById("loginForm");
const formContainer = document.getElementById("form-container");
const homepage = document.getElementById("homepage");
const nameInput = document.getElementById("name");
const passworInput = document.getElementById("password");
const issueCount = document.getElementById("issue-count");
const issueList = document.getElementById("issues-list");
const tabContainer = document.getElementById("tab-container");

tabContainer.addEventListener("click", function (e) {
  e.stopPropagation();
  const clickedBtn = e.target;
  const buttonText = clickedBtn.innerText;
  const allowed = ["All", "Open", "Closed"];
  if (!allowed.includes(buttonText)) return;

  const buttons = document.querySelectorAll("#tab-container button");
  console.log(buttons);
  buttons.forEach((b) => {
    b.classList.remove("btn", "btn-primary");
  });
  clickedBtn.classList.add("btn", "btn-primary");

  renderByTab(buttonText);
});


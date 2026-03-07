const loginFormElem = document.getElementById("loginForm");
const formContainer = document.getElementById("form-container");
const homepage = document.getElementById("homepage");
const nameInput = document.getElementById("name");
const passworInput = document.getElementById("password");
const issueCount = document.getElementById("issue-count");
const issueList = document.getElementById("issues-list");
const tabContainer = document.getElementById("tab-container");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const modalContainer = document.getElementById("modal-container");
// const modalContainer = document.getElementById("modal-container");

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

//  fetch by search 
searchBtn.addEventListener("click", function(){
let searchText = searchInput.value.trim()
if(searchText){

    fetchBysearch(searchText)
}


})

searchInput.addEventListener("keyup", function(e){
    const searchText = searchInput.value.trim()
   if(e.key === "Enter"){
     if(searchText)fetchBysearch(searchText)
   }
})
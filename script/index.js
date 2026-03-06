
const loginFormElem = document.getElementById("loginForm")
const formContainer = document.getElementById("form-container")
const homepage = document.getElementById("homepage")
const nameInput = document.getElementById("name")
const passworInput = document.getElementById("password")
const issueCount = document.getElementById("issue-count")
const issueList = document.getElementById("issues-list")
const tabContainer = document.getElementById("tab-container")

tabContainer.addEventListener("click", function(e){
    const clickedBtn = e.target
    console.log(clickedBtn);
    
  const buttons = document.querySelectorAll("#tab-container button")
  console.log(buttons);
  buttons.forEach((b)=>{
   b.classList.remove("btn","btn-primary")
    
  })
  clickedBtn.classList.add("btn","btn-primary")

  renderByTab(clickedBtn.innerText)
 
})




 



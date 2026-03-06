
const loginFormElem = document.getElementById("loginForm")
const formContainer = document.getElementById("form-container")
const homepage = document.getElementById("homepage")
const nameInput = document.getElementById("name")
const passworInput = document.getElementById("password")


loginFormElem.addEventListener("submit", function (e){
    e.preventDefault()

    const name = nameInput.value;
    const password = passworInput.value;
    console.log(name);
    console.log(password);

    if(name === "admin" && password === "admin123"){
         formContainer.classList.add("hidden")
         homepage.classList.remove("hidden")

         
    }else{
        alert("invalid username or password");
        
    }
    

})

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
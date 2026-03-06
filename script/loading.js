 const issueLoad = document.getElementById("issues-load")
    const loadingContainer = document.getElementById("loading")


 const showLoading = ()=>{
    //  const issueLoad = document.getElementById("issues-load")
    // const loadingContainer = document.getElementById("loading")
    issueLoad.classList.add("hidden")
    loadingContainer.classList.remove("hidden")
 }

 const closeLoading = ()=>{
    
  issueLoad.classList.remove("hidden")
    loadingContainer.classList.add("hidden")
 }
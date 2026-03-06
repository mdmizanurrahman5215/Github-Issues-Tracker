 
 let issues = []

const fetchAllIssues = async () => {
  showLoading();
  try {
    const response = await fetch(
      "https://phi-lab-server.vercel.app/api/v1/lab/issues",
    );
    const data = await response.json();
     issues = data.data;
    displayIssues(issues);
    issueConter(issues);
    console.log(issues);
  } catch (error) {
   console.log(error);
   
  } finally {
    closeLoading();
  }
};

fetchAllIssues();




//  const searchText = "Fix broken image uploads"
const fetchBysearch = async(searchText)=>{

      showLoading();
  try {
    const response = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchText}`);
    const data = await response.json();
   
    
     const searchData = data.data;
    displayIssues(searchData);
    issueConter(searchData);
  
  } catch (error) {
   console.log(error);
   
  } finally {
    closeLoading();
  }

}


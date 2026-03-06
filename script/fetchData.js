const fetchAllIssues = async () => {
  showLoading();
  try {
    const response = await fetch(
      "https://phi-lab-server.vercel.app/api/v1/lab/issues",
    );
    const data = await response.json();
    const issues = data.data;
    displayIssues(issues);
    issueConter(issues)
    console.log(issues);
  } catch (error) {
   console.log(error);
   
  } finally {
    closeLoading();
  }
};

fetchAllIssues();

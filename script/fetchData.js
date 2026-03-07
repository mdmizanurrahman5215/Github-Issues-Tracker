let issues = [];

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
  } catch (error) {
    alert("Something is wrong! Please try again");
  } finally {
    closeLoading();
  }
};

fetchAllIssues();

const fetchBysearch = async (searchText) => {
  showLoading();
  try {
    const response = await fetch(
      `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchText}`,
    );
    const data = await response.json();

    const searchData = data.data;
    displayIssues(searchData);
    issueConter(searchData);
  } catch (error) {
    alert("Something is wrong! Please try again");
  } finally {
    closeLoading();
  }
};

//   single issue

const fetctByid = async (id) => {
  showLoading();
  try {
    const response = await fetch(
      `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`,
    );
    const data = await response.json();
    const issue = data.data;

    showisseDetails(issue);
  } catch (error) {
    alert("Something is wrong! Please try again");
  } finally {
    closeLoading();
  }
};

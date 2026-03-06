const renderByTab = (tab) => {
  console.log(issues);
  if (tab == "All") {
    displayIssues(issues);
    issueConter(issues);
  }
  if (tab == "Open") {
    const filtered = issues.filter(
      (issue) => issue.status.toLowerCase() == tab.toLowerCase(),
    );
    console.log(filtered);
    displayIssues(filtered);
    issueConter(filtered);
  }
  if (tab == "Closed") {
    const filtered = issues.filter(
      (issue) => issue.status.toLowerCase() == tab.toLowerCase(),
    );
    console.log(filtered);
    displayIssues(filtered);
    issueConter(filtered);
  }

  console.log(tab);
};

const renderByTab = (tab) => {
  displayIssues(issues);
  issueConter(issues);

  if (tab == "Open") {
    const filtered = issues.filter(
      (issue) => issue.status.toLowerCase() == tab.toLowerCase(),
    );

    displayIssues(filtered);
    issueConter(filtered);
  }
  if (tab == "Closed") {
    const filtered = issues.filter(
      (issue) => issue.status.toLowerCase() == tab.toLowerCase(),
    );

    displayIssues(filtered);
    issueConter(filtered);
  }
};

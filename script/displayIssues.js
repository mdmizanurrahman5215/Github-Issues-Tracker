const displayIssues = (array) => {
  console.log(array);

  issueList.innerHTML = "";
  if (!array.length) {
    console.log("no issues here");
  }

  array.forEach((issue) => {
    const {
      title,
      id,
      description,
      status,
      labels,
      priority,
      author,
      assignee,
      createdAt,
      updatedAt,
    } = issue;
    const date = new Date(createdAt);
    // console.log();

    const div = document.createElement("div");
    div.innerHTML = `
    <div
              id="issues"
              class="bg-white p-6 rounded-md shadow-md space-y-6 border-t-4  ${status == "open" ? "border-t-green-500" : "border-t-purple-500"}"
            >
              <div class="flex justify-between items-center">
                <img src="${status == "open" ? "./assets/Open-Status.png" : "assets/Closed- Status .png"}" alt="" width="50" />
                <h1
                  class="px-8 py-2  font-semibold text-2xl rounded-full uppercase ${priority == "high" ? "bg-red-100 text-red-500 " : priority == "medium" ? "bg-yellow-100 text-yellow-500" : " bg-gray-100 text-gray-500"}"
                >
                 ${priority}
                </h1>
              </div>
              <h1 class="details text-2xl font-semibold cursor-pointer ${status == "open" ? "hover:text-green-500" : "hover:text-purple-500"}">
                ${title}
              </h1>
              <p class="line-clamp-2 text-xl">
                ${description}
              </p>
              <div class="label flex items-center gap-6">
               
              </div>
              <hr class="border-gray-400" />
              <div class="">
                <p class="text-xl text-gray-500"> #${id} ${author ? author : "author not available"}</p>
                <p class="text-xl text-gray-500">${date.toLocaleDateString()}</p>
              </div>
     </div>
    `;
    issueList.appendChild(div);
    const labeldiv = div.querySelector(".label");
    labels.forEach((label) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <p class="bg-yellow-100 px-4 py-2 rounded-md text-yellow-600 uppercase">${label}</p>
        `;
      labeldiv.appendChild(div);
    });

    div.querySelector(".details").addEventListener("click", function (e) {
      fetctByid(id);
    });
  });
};

// {
//     "id": 1,
//     "title": "Fix navigation menu on mobile devices",
//     "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
//     "status": "open",
//     "labels": [
//         "bug",
//         "help wanted"
//     ],
//     "priority": "high",
//     "author": "john_doe",
//     "assignee": "jane_smith",
//     "createdAt": "2024-01-15T10:30:00Z",
//     "updatedAt": "2024-01-15T10:30:00Z"
// }

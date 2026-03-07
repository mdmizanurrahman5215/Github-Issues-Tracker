const displayIssues = (array) => {
  issueList.innerHTML = "";
  if (!array.length) {
    alert("No Issue Found");
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

    const div = document.createElement("div");
    div.innerHTML = `
    <div
              data-id="${id}"
              class="issues bg-white p-6 rounded-md shadow-md space-y-6 border-t-4  ${status == "open" ? "border-t-green-500" : "border-t-purple-500"}"
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
        <p class="bg-amber-200 px-4 py-2 rounded-md text-amber-800 uppercase">${label}</p>
        `;
      labeldiv.appendChild(div);
    });
  });
};

issueList.addEventListener("click", function (e) {
  const cart = e.target.closest(".issues");
  const cartId = cart.dataset.id;
  fetctByid(cartId);
});

const showisseDetails = (issue) => {
  modalContainer.innerHTML = "";

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
      <div id="modal" class="w-150  bg-white shadow-md rounded-md p-6 space-y-4 ">
          <h1 class="text-2xl font-semibold">${title}</h1>
          <div class="flex items-center gap-2">
            <span class="${status == "open" ? "bg-green-500 text-white" : "bg-purple-500 text-white"} rounded-md px-4 py-1">${status == "open" ? "Opened" : "Closed"}</span>
            <div class="w-2 h-2 rounded-full bg-gray-500"></div>
            <span>Opened by ${author}</span>
            <div class="w-2 h-2 rounded-full bg-gray-500"></div>
            <span>${date.toLocaleDateString()}</span>
          </div>
          <div class="label-container flex items-center gap-2">
            
          </div>
          <p class="text-xl">${description}</p>
          <div class="grid grid-cols-3">
            <div>
              <p class="text-xl">Assignee :</p>
              <p>${assignee ? assignee : "N/A"}</p>
            </div>
            <div>
              <p class="text-xl">priority:</p>
              <p class=" uppercase w-fit px-4 py-1 rounded-md font-semibold  ${priority == "high" ? "bg-red-100 text-red-500 " : priority == "medium" ? "bg-yellow-100 text-yellow-500" : " bg-gray-100 text-gray-500"}">${priority}</p>
            </div>
          </div>
          <div class="flex justify-end items-center">
            <button  id="close" class="border-2 bg-red-500 px-4 py-1 rounded-md text-white font-bold text-2xl cursor-pointer hover:text-red-500 hover:bg-white hover:border-2 hover:border-red-500">Close</button>
          </div>
        </div>
    `;

  modalContainer.appendChild(div);

  const modaldiv = div.querySelector(".label-container");
  modaldiv.innerHTML = "";
  labels.forEach((label) => {
    
    const p = document.createElement("p");

    p.innerText = label;
    p.classList.add(
      "bg-amber-200",
      "px-4",
      "py-1",
      "rounded-md",
      "text-amber-800",
      "font-bold",
      "uppercase",
    );
    modaldiv.appendChild(p);
    modalContainer.classList.remove("hidden");

    const closeBtn = div.querySelector("#close");

    closeBtn.addEventListener("click", () => {
      modalContainer.classList.add("hidden");
    });
  });
};

//----Create structure of the Web Page-------//

const root = document.querySelector("#root");
let page = 1;

function createProjectTitle() {
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("title-of-the-project");
  root.appendChild(headerDiv);
  const h1Header = document.createElement("h1");
  h1Header.innerHTML = "Rick and Morty API";
  headerDiv.appendChild(h1Header);
}

function createContainer() {
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container");
  root.appendChild(containerDiv);
}

function createSidebar() {
  const sidebarDiv = document.createElement("div");
  sidebarDiv.classList.add("sidebar");
  const queryContainerDiv = document.querySelector(".container");
  queryContainerDiv.appendChild(sidebarDiv);
  showEpisodesList();
}

function createMainArea() {
  const mainAreaDiv = document.createElement("div");
  mainAreaDiv.classList.add("main-area");
  const queryContainerDiv = document.querySelector(".container");
  queryContainerDiv.appendChild(mainAreaDiv);
}
function createLoadEpisodesButton() {
  const buttonElement = document.createElement("button");
  buttonElement.classList.add(".button");
  buttonElement.innerHTML = "Load Episodes";
  document.querySelector(".sidebar").appendChild(buttonElement);
  console.log(buttonElement);
  buttonElement.addEventListener("click", () => {
    showEpisodesList();
  });
}

//--Fetch Episodes from Api --//
function showEpisodesList() {
  fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data.results);
      const unorderedList = document.createElement("ul");
      document.querySelector(".sidebar").appendChild(unorderedList);

      // Loop through list of episodes
      data.results.forEach((object) => {
        const listItem = document.createElement("li");
        unorderedList.appendChild(listItem);
        const linkItem = document.createElement("a");
        const linkText = document.createTextNode(`Episode ${object.id}`);
        linkItem.appendChild(linkText);
        listItem.appendChild(linkItem);
        linkItem.href = "#";
      });
      page = page + 1;
    });
}

createProjectTitle();
createContainer();
createSidebar();
createMainArea();
createLoadEpisodesButton();

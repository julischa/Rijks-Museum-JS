const url =
  "https://www.rijksmuseum.nl/api/nl/collection?key=Hu8sPHp0&involvedMaker=Rembrandt+van+Rijn";
const url2 =
  "https://www.rijksmuseum.nl/api/nl/collection?key=Hu8sPHp0&involvedMaker=Johannes+Vermeer";

function fetchArtistData(artistName) {
  const apiUrl = `https://www.rijksmuseum.nl/api/nl/collection?key=Hu8sPHp0&involvedMaker=${artistName}`;
  console.log("artistName:", artistName);
  fetch(apiUrl)
    .then((response) => response.json())
    .then((result) => {
      console.log("result:", result);
      render(result);
    })
    .catch((error) => {
      console.log("error:", error);
    });
}

function createButtons() {
  const buttonContainer = document.getElementById("button-container");

  const createButton = (text, value) => {
    const button = document.createElement("button");
    button.setAttribute("class", "px-4 py-2 mt-2 mx-2 red-button");
    button.innerText = text;
    button.value = value;
    buttonContainer.appendChild(button);
    return button;
  };

  const rembrandtButton = createButton("REMBRANDT", "Rembrandt van Rijn");
  const vermeerButton = createButton("VERMEER", "Johannes Vermeer");
  const deleteButton = createButton("✶");
  deleteButton.setAttribute("id", "delete-button");

  rembrandtButton.classList.add("red-button");
  vermeerButton.classList.add("red-button");
  deleteButton.classList.add("red-button");

  addEvents(rembrandtButton, vermeerButton, deleteButton);
}

function addEvents(rembrandtButton, vermeerButton, deleteButton) {
  rembrandtButton.addEventListener("click", (event) => {
    const artistName = event.target.value;
    fetchArtistData(artistName);
  });

  vermeerButton.addEventListener("click", (event) => {
    fetchArtistData("Johannes Vermeer");
  });

  deleteButton.addEventListener("click", () => {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
  });
}

function render(api) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  for (let i = 0; i < api.artObjects.length; i++) {
    const title = api.artObjects[i].title.split(" ").slice(0, 4).join(" ");
    const img = document.createElement("img");
    img.setAttribute("src", api.artObjects[i].webImage.url);

    const author = document.createElement("p");
    author.innerText = api.artObjects[i].principalOrFirstMaker;

    const container = document.createElement("div");
    container.appendChild(document.createElement("h5")).innerText = title;
    container.appendChild(img);
    container.appendChild(author);

    cardContainer.appendChild(container);
  }
}

createButtons();

function createHeader() {
  const header = document.createElement("header");
  header.setAttribute("id", "header");

  const h1Header = document.createElement("h1");
  h1Header.classList.add("h1-header");
  h1Header.textContent = "World Weather";

  const sunImg = document.createElement("img");
  sunImg.classList.add("sun");
  sunImg.src = "./images/sun-icon.png";

  header.appendChild(h1Header);
  header.appendChild(sunImg);

  return header;
}

function createMain() {
  const main = document.createElement("main");
  main.setAttribute("id", "main");
  return main;
}

function createFormContainer() {
  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");
  formContainer.innerHTML = `
    <form id="form" action="/">
    <input class="search" type="search" placeholder="Search">
    </form>
    <img src="./images/searchBtn.png" alt="search" class="searchBtn">
    `;
    return formContainer;
}
function createSectionCard() {
  const sectionCard = document.createElement("section");
  sectionCard.classList.add("section");
  sectionCard.innerHTML = `
  <div class="main-div">
  <div class="card-container">
  <div class="progress">
  <div class="color"></div>
  </div>
  </div>
  </div>
  `;
  return sectionCard;
}

function loadPage() {
  const content = document.querySelector("#content");
  const header = createHeader();
  const main = createMain();
  const formContainer = createFormContainer();
  const sectionCard = createSectionCard();
  main.appendChild(formContainer); 
  main.appendChild(sectionCard); 
  content.appendChild(header);
  content.appendChild(main);
}
export default loadPage;

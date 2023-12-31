// function for creating header
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

// function for creating main
function createMain() {
  const main = document.createElement("main");
  main.setAttribute("id", "main");
  return main;
}

// finction for creating form container
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
// function for creating section card
function createSectionCard() {
  const sectionCard = document.createElement("section");
  sectionCard.classList.add("section");
  sectionCard.innerHTML = `
  <div class="main-div">
  <div class="card-container">
  <div class="progress">
  <div class="color"></div>
  </div>
  <div class="card">
  <div class="sos-container">
  <img src="#" alt="sos" class="sos">
  <p class="err"></p>
  </div>
  <h1 class="city-name"></h1>
  <img src="#" alt="icon" class="icon" />
  <p class="info"></p>
  <p class="temp"></p>
  </div>
  <div class="details">
  <div class="col1">
    <img src="#" alt="humidity" class="humidity" />
  </div>
  <div class="col2">
    <p class="desc-hum1"></p>
    <p class="desc-hum2"></p>
  </div>
  <div class="col3">
    <img src="#" alt="wind" class="wind" />
  </div>
  <div class="col4">
    <p class="desc-wind1"></p>
    <p class="desc-wind2"></p>
  </div>
</div>
<div class="bookmark">
<h3 class="book-desc">Add to bookmarks</h3>
<img src="./images/bookmark1.png" class="bookmark-img">
<img src="./images/bookmark2.png" class="bookmark-img1">
</div>
  </div>
  </div>
  `;
  return sectionCard;
}
// function for creating bookmark's information
function createBookmarkInfo() {
  const bookmarkInfo = document.createElement('div');
  bookmarkInfo.classList.add('bookmark-info');

  const h1Info = document.createElement("h1");
  h1Info.classList.add("h1-info");
  h1Info.textContent = "Bookmarks";
  bookmarkInfo.appendChild(h1Info);
  return bookmarkInfo;
}

// function for creating bookmarks holder
function createBookmarkHolder() {
  const bookmarkHolder = document.createElement("section");
  bookmarkHolder.classList.add("bookmark-holder");
  return bookmarkHolder;
}

// function for loading all created elements
function loadPage() {
  const content = document.querySelector("#content");
  const header = createHeader();
  const main = createMain();
  const formContainer = createFormContainer();
  const sectionCard = createSectionCard();
  const bookmarkInfo = createBookmarkInfo();
  const bookmarkHolder = createBookmarkHolder();
  main.appendChild(formContainer);
  main.appendChild(sectionCard);
  main.appendChild(bookmarkInfo);
  main.appendChild(bookmarkHolder);
  content.appendChild(header);
  content.appendChild(main);
}
export default loadPage;

function createCardContainer(cardHTML) {
  const copyContainer = document.createElement("div");
  copyContainer.innerHTML = cardHTML;
  copyContainer.classList.add("card-container1");

  if (!copyContainer.querySelector(".delete-button")) {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    copyContainer.appendChild(deleteButton);
  }

  return copyContainer;
}
function handleClick() {
  const cardContainer = document.querySelector(".card-container");
  const copy = cardContainer.cloneNode(true);

  const savedCards = JSON.parse(localStorage.getItem("weatherCards")) || [];
  savedCards.push(copy.innerHTML);
  localStorage.setItem("weatherCards", JSON.stringify(savedCards));

  const bookmarkInfo = document.querySelector(".bookmark-info");
  const bookmarkHolder = document.querySelector(".bookmark-holder");
  bookmarkHolder.innerHTML = ""; // Clear the bookmark-holder before adding the saved cards

  const bookmarkImg = document.querySelector(".bookmark-img");
  const bookmarkImg1 = document.querySelector(".bookmark-img1");
  bookmarkImg1.classList.add("active");
  bookmarkImg.classList.add("no-active");

  savedCards.forEach((cardHTML) => {
    const copyContainer = createCardContainer(cardHTML);
    bookmarkHolder.appendChild(copyContainer);
  });

  if (savedCards.length > 0) {
    bookmarkInfo.classList.add("appear");
  } else {
    bookmarkInfo.classList.remove("appear");
  }

  setTimeout(() => {
    alert("Added to bookmarks");
    bookmarkImg1.classList.remove("active");
    bookmarkImg.classList.remove("no-active");
  }, 500);
  const removeBookmarkBtnHolder = bookmarkHolder.querySelectorAll(".bookmark");
  removeBookmarkBtnHolder.forEach((btn) => (btn.style.display = "none"));
}
function createSavedCards() {
  const bookmarkHolder = document.querySelector(".bookmark-holder");
  bookmarkHolder.innerHTML = "";
  const savedCards = JSON.parse(localStorage.getItem("weatherCards")) || [];
  const bookmarkInfo = document.querySelector(".bookmark-info");

  savedCards.forEach((cardData) => {
    const copyContainer = createCardContainer(cardData);
    bookmarkHolder.appendChild(copyContainer);
  });

  if (savedCards.length > 0) {
    bookmarkInfo.classList.add("appear");
  } else {
    bookmarkInfo.classList.remove("appear");
  }

  const removeBookmarkBtnHolder = bookmarkHolder.querySelectorAll(".bookmark");
  removeBookmarkBtnHolder.forEach((btn) => (btn.style.display = "none"));
}

document.addEventListener("DOMContentLoaded", function () {
    const bookmarkHolder = document.querySelector(".bookmark-holder");
    if (bookmarkHolder) {
      bookmarkHolder.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-button")) {
          event.target.parentElement.remove();
          const bookmarkInfo = document.querySelector(".bookmark-info");
  
          setTimeout(() => {
            alert("Removed from bookmarks");
          }, 500);
  
          const savedCards = Array.from(bookmarkHolder.children).map((card) => card.innerHTML);
  
          if (savedCards.length > 0) {
            bookmarkInfo.classList.add("appear");
          } else {
            bookmarkInfo.classList.remove("appear");
          }
          localStorage.setItem("weatherCards", JSON.stringify(savedCards));
        }
      });
    }
  });
  


export { handleClick, createSavedCards };

import loadPage from "./view";
import { defaultCity, showCity } from "./api";
import { handleClick, createSavedCards } from "./bookmark";

function showPage() {
  loadPage();
  defaultCity();

  const form = document.querySelector("#form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  const searchBtn = document.querySelector(".searchBtn");
  searchBtn.addEventListener("click", showCity);

  const searchInput = document.querySelector(".search");
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      searchBtn.click();
    }
  });

  searchInput.addEventListener("focus", () => {
    searchInput.classList.add("focus");
  });

  const bookmarkImg = document.querySelector(".bookmark-img");
  bookmarkImg.addEventListener("click", handleClick);

  document.addEventListener("DOMContentLoaded", createSavedCards);

//   const bookmarkHolder = document.querySelector(".bookmark-holder");
//   const deleteBtn = bookmarkHolder.querySelector(".delete-button");
//   deleteBtn.addEventListener("click", deleteEvent);
}
showPage();

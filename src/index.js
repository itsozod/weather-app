import loadPage from "./view";
import defaultCity from "./api";


function showPage() {
    loadPage();
    defaultCity();
    const form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
      });
}
showPage();

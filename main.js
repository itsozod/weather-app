(()=>{"use strict";!function(){const n=document.querySelector("#content"),e=function(){const n=document.createElement("header");n.setAttribute("id","header");const e=document.createElement("h1");e.classList.add("h1-header"),e.textContent="World Weather";const t=document.createElement("img");return t.classList.add("sun"),t.src="./images/sun-icon.png",n.appendChild(e),n.appendChild(t),n}(),t=function(){const n=document.createElement("main");return n.setAttribute("id","main"),n}(),c=function(){const n=document.createElement("div");return n.classList.add("form-container"),n.innerHTML='\n    <form id="form" action="/">\n    <input class="search" type="search" placeholder="Search">\n    </form>\n    <img src="./images/searchBtn.png" alt="search" class="searchBtn">\n    ',n}(),s=function(){const n=document.createElement("section");return n.classList.add("section"),n.innerHTML='\n  <div class="main-div">\n  <div class="card-container">\n  <div class="progress">\n  <div class="color"></div>\n  </div>\n  </div>\n  </div>\n  ',n}();t.appendChild(c),t.appendChild(s),n.appendChild(e),n.appendChild(t)}()})();
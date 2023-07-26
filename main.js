(()=>{"use strict";(function(){const e=document.querySelector("#content"),n=function(){const e=document.createElement("header");e.setAttribute("id","header");const n=document.createElement("h1");n.classList.add("h1-header"),n.textContent="World Weather";const t=document.createElement("img");return t.classList.add("sun"),t.src="./images/sun-icon.png",e.appendChild(n),e.appendChild(t),e}(),t=function(){const e=document.createElement("main");return e.setAttribute("id","main"),e}(),c=function(){const e=document.createElement("div");return e.classList.add("form-container"),e.innerHTML='\n    <form id="form" action="/">\n    <input class="search" type="search" placeholder="Search">\n    </form>\n    <img src="./images/searchBtn.png" alt="search" class="searchBtn">\n    ',e}(),s=function(){const e=document.createElement("section");return e.classList.add("section"),e.innerHTML='\n  <div class="main-div">\n  <div class="card-container">\n  <div class="progress">\n  <div class="color"></div>\n  </div>\n  <div class="card">\n  <div class="sos-container">\n  <img src="#" alt="sos" class="sos">\n  <p class="err"></p>\n  </div>\n  <h1 class="city-name"></h1>\n  <img src="#" alt="icon" class="icon" />\n  <p class="info"></p>\n  <p class="temp"></p>\n  </div>\n  <div class="details">\n  <div class="col1">\n    <img src="#" alt="humidity" class="humidity" />\n  </div>\n  <div class="col2">\n    <p class="desc-hum1"></p>\n    <p class="desc-hum2"></p>\n  </div>\n  <div class="col3">\n    <img src="#" alt="wind" class="wind" />\n  </div>\n  <div class="col4">\n    <p class="desc-wind1"></p>\n    <p class="desc-wind2"></p>\n  </div>\n</div>\n  </div>\n  </div>\n  ',e}();t.appendChild(c),t.appendChild(s),e.appendChild(n),e.appendChild(t)})(),async function(){const e=document.querySelector(".city-name"),n=document.querySelector(".temp"),t=document.querySelector(".icon"),c=document.querySelector(".desc-hum1"),s=document.querySelector(".desc-wind1"),i=document.querySelector(".desc-hum2"),a=document.querySelector(".desc-wind2"),d=document.querySelector(".humidity"),r=document.querySelector(".wind"),o=document.querySelector(".info"),l=document.querySelector(".card-container");try{const m=await fetch("https://api.openweathermap.org/data/2.5/weather?q=dushanbe&units=metric&appid=fddff0c5843150647e172531616f327e"),u=await m.json();l.style.display="flex",e.textContent=u.name,n.textContent=`${Math.round(u.main.temp)}C`,d.src="images/humidity.png",c.textContent=u.main.humidity,i.textContent="Humidity",r.src="images/wind.png",s.textContent=u.wind.speed,a.textContent="Wind","Clouds"===u.weather[0].main&&(t.src="images/clouds.png",o.textContent=u.weather[0].description),"Haze"===u.weather[0].main&&(t.src="images/mist.png",o.textContent=u.weather[0].description),"Clear"===u.weather[0].main&&(t.src="images/clear.png",o.textContent=u.weather[0].description),"Rain"===u.weather[0].main&&(t.src="images/rain.png",o.textContent=u.weather[0].description),"Drizzle"===u.weather[0].main&&(t.src="images/drizzle.png",o.textContent=u.weather[0].description),"Snow"===u.weather[0].main&&(t.src="images/snow.png",o.textContent=u.weather[0].description),console.log(u)}catch(e){console.log("Not found",e)}}()})();
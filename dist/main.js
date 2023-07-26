(()=>{"use strict";async function e(){const e=document.querySelector(".search"),t=document.querySelector(".sos-container"),n=document.querySelector(".city-name"),c=document.querySelector(".temp"),s=document.querySelector(".icon"),o=document.querySelector(".desc-hum1"),r=document.querySelector(".desc-wind1"),i=document.querySelector(".desc-hum2"),a=document.querySelector(".desc-wind2"),d=document.querySelector(".humidity"),m=document.querySelector(".wind"),l=document.querySelector(".info"),u=document.querySelector(".card-container"),p=document.querySelector(".sos"),h=document.querySelector(".err"),g=document.querySelector(".progress"),y=document.querySelector(".search").value,w=document.querySelector(".bookmark");try{const C=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${y}&units=metric&cnt=7&appid=fddff0c5843150647e172531616f327e`,{mode:"cors"}),v=await C.json();u.style.display="flex",g.classList.add("show"),setTimeout((()=>{g.classList.remove("show")}),3e3),setTimeout((()=>{document.querySelector(".search").value="","404"===v.cod||""===y?(t.classList.add("display"),h.textContent="Not found, enter a city or country name!",p.src="images/404.png",n.textContent="",c.textContent="",d.src="",d.alt="",o.textContent="",i.textContent="",m.src="",m.alt="",r.textContent="",a.textContent="",s.src="",s.alt="",l.textContent="",w.classList.add("disappear"),e.classList.remove("focus"),e.blur(),console.log(v)):(t.classList.remove("display"),h.textContent="",p.src="",n.textContent=v.name,c.textContent=`${Math.round(v.main.temp)}C`,d.src="images/humidity.png",o.textContent=v.main.humidity,i.textContent="Humidity",m.src="images/wind.png",r.textContent=v.wind.speed,a.textContent="Wind",w.classList.remove("disappear"),e.classList.remove("focus"),e.blur(),console.log(v)),"Clouds"===v.weather[0].main&&(s.src="images/clouds.png",l.textContent=v.weather[0].description),"Haze"===v.weather[0].main&&(s.src="images/mist.png",l.textContent=v.weather[0].description),"Mist"===v.weather[0].main&&(s.src="images/mist.png",l.textContent=v.weather[0].description),"Clear"===v.weather[0].main&&(s.src="images/clear.png",l.textContent=v.weather[0].description),"Rain"===v.weather[0].main&&(s.src="images/rain.png",l.textContent=v.weather[0].description),"Drizzle"===v.weather[0].main&&(s.src="images/drizzle.png",l.textContent=v.weather[0].description),"Snow"===v.weather[0].main&&(s.src="images/snow.png",l.textContent=v.weather[0].description)}),3e3)}catch(e){console.log("Not found",e.mesage)}}!function(){(function(){const e=document.querySelector("#content"),t=function(){const e=document.createElement("header");e.setAttribute("id","header");const t=document.createElement("h1");t.classList.add("h1-header"),t.textContent="World Weather";const n=document.createElement("img");return n.classList.add("sun"),n.src="./images/sun-icon.png",e.appendChild(t),e.appendChild(n),e}(),n=function(){const e=document.createElement("main");return e.setAttribute("id","main"),e}(),c=function(){const e=document.createElement("div");return e.classList.add("form-container"),e.innerHTML='\n    <form id="form" action="/">\n    <input class="search" type="search" placeholder="Search">\n    </form>\n    <img src="./images/searchBtn.png" alt="search" class="searchBtn">\n    ',e}(),s=function(){const e=document.createElement("section");return e.classList.add("section"),e.innerHTML='\n  <div class="main-div">\n  <div class="card-container">\n  <div class="progress">\n  <div class="color"></div>\n  </div>\n  <div class="card">\n  <div class="sos-container">\n  <img src="#" alt="sos" class="sos">\n  <p class="err"></p>\n  </div>\n  <h1 class="city-name"></h1>\n  <img src="#" alt="icon" class="icon" />\n  <p class="info"></p>\n  <p class="temp"></p>\n  </div>\n  <div class="details">\n  <div class="col1">\n    <img src="#" alt="humidity" class="humidity" />\n  </div>\n  <div class="col2">\n    <p class="desc-hum1"></p>\n    <p class="desc-hum2"></p>\n  </div>\n  <div class="col3">\n    <img src="#" alt="wind" class="wind" />\n  </div>\n  <div class="col4">\n    <p class="desc-wind1"></p>\n    <p class="desc-wind2"></p>\n  </div>\n</div>\n<div class="bookmark">\n<h3 class="book-desc">Add to bookmarks</h3>\n<img src="./images/bookmark1.png" class="bookmark-img">\n<img src="./images/bookmark2.png" class="bookmark-img1">\n</div>\n  </div>\n  </div>\n  ',e}();n.appendChild(c),n.appendChild(s),e.appendChild(t),e.appendChild(n)})(),async function(){const e=document.querySelector(".city-name"),t=document.querySelector(".temp"),n=document.querySelector(".icon"),c=document.querySelector(".desc-hum1"),s=document.querySelector(".desc-wind1"),o=document.querySelector(".desc-hum2"),r=document.querySelector(".desc-wind2"),i=document.querySelector(".humidity"),a=document.querySelector(".wind"),d=document.querySelector(".info"),m=document.querySelector(".card-container");try{const l=await fetch("https://api.openweathermap.org/data/2.5/weather?q=dushanbe&units=metric&appid=fddff0c5843150647e172531616f327e"),u=await l.json();m.style.display="flex",e.textContent=u.name,t.textContent=`${Math.round(u.main.temp)}C`,i.src="images/humidity.png",c.textContent=u.main.humidity,o.textContent="Humidity",a.src="images/wind.png",s.textContent=u.wind.speed,r.textContent="Wind","Clouds"===u.weather[0].main&&(n.src="images/clouds.png",d.textContent=u.weather[0].description),"Haze"===u.weather[0].main&&(n.src="images/mist.png",d.textContent=u.weather[0].description),"Clear"===u.weather[0].main&&(n.src="images/clear.png",d.textContent=u.weather[0].description),"Rain"===u.weather[0].main&&(n.src="images/rain.png",d.textContent=u.weather[0].description),"Drizzle"===u.weather[0].main&&(n.src="images/drizzle.png",d.textContent=u.weather[0].description),"Snow"===u.weather[0].main&&(n.src="images/snow.png",d.textContent=u.weather[0].description),console.log(u)}catch(e){console.log("Not found",e)}}(),document.querySelector("#form").addEventListener("submit",(e=>{e.preventDefault()}));const t=document.querySelector(".searchBtn");t.addEventListener("click",e);const n=document.querySelector(".search");n.addEventListener("keydown",(e=>{"Enter"!==e.key&&13!==e.keyCode||t.click()})),n.addEventListener("focus",(()=>{n.classList.add("focus")}))}()})();
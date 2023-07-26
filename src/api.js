async function defaultCity() {
  const cityName = document.querySelector(".city-name");
  const temp = document.querySelector(".temp");
  const icon = document.querySelector(".icon");
  const humidityDesc1 = document.querySelector(".desc-hum1");
  const windDesc1 = document.querySelector(".desc-wind1");
  const humidityDesc2 = document.querySelector(".desc-hum2");
  const windDesc2 = document.querySelector(".desc-wind2");
  const humidity = document.querySelector(".humidity");
  const wind = document.querySelector(".wind");
  const info = document.querySelector(".info");
  const cardContainer = document.querySelector(".card-container");
  const APIKey = "fddff0c5843150647e172531616f327e";
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=dushanbe&units=metric&appid=${APIKey}`
    );
    const data = await response.json();
    cardContainer.style.display = "flex";
    cityName.textContent = data.name;
    temp.textContent = `${Math.round(data.main.temp)}C`;
    humidity.src = "images/humidity.png";
    humidityDesc1.textContent = data.main.humidity;
    humidityDesc2.textContent = "Humidity";
    wind.src = "images/wind.png";
    windDesc1.textContent = data.wind.speed;
    windDesc2.textContent = "Wind";

    if (data.weather[0].main === "Clouds") {
      icon.src = "images/clouds.png";
      info.textContent = data.weather[0].description;
    }
    if (data.weather[0].main === "Haze") {
      icon.src = "images/mist.png";
      info.textContent = data.weather[0].description;
    }
    if (data.weather[0].main === "Clear") {
      icon.src = "images/clear.png";
      info.textContent = data.weather[0].description;
    }
    if (data.weather[0].main === "Rain") {
      icon.src = "images/rain.png";
      info.textContent = data.weather[0].description;
    }
    if (data.weather[0].main === "Drizzle") {
      icon.src = "images/drizzle.png";
      info.textContent = data.weather[0].description;
    }
    if (data.weather[0].main === "Snow") {
      icon.src = "images/snow.png";
      info.textContent = data.weather[0].description;
    }
    console.log(data);
  } catch (err) {
    console.log("Not found", err);
  }
}

async function showCity() {
  const searchInput = document.querySelector(".search");
  const sosContainer = document.querySelector(".sos-container");
  const cityName = document.querySelector(".city-name");
  const temp = document.querySelector(".temp");
  const icon = document.querySelector(".icon");
  const humidityDesc1 = document.querySelector(".desc-hum1");
  const windDesc1 = document.querySelector(".desc-wind1");
  const humidityDesc2 = document.querySelector(".desc-hum2");
  const windDesc2 = document.querySelector(".desc-wind2");
  const humidity = document.querySelector(".humidity");
  const wind = document.querySelector(".wind");
  const info = document.querySelector(".info");
  const cardContainer = document.querySelector(".card-container");
  const sosImage = document.querySelector(".sos");
  const error = document.querySelector(".err");
  const loader = document.querySelector(".progress");
  const APIKey = "fddff0c5843150647e172531616f327e";
  const city = document.querySelector(".search").value;
  const bookmarkBtnHolder = document.querySelector(".bookmark");

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&cnt=7&appid=${APIKey}`,
      { mode: "cors" }
    );
    const data = await response.json();
    cardContainer.style.display = "flex";

    loader.classList.add("show");

    setTimeout(() => {
      loader.classList.remove("show");
    }, 3000);

    setTimeout(() => {
      document.querySelector(".search").value = "";
      if (data.cod === "404" || city === "") {
        sosContainer.classList.add("display");
        error.textContent = "Not found, enter a city or country name!";
        sosImage.src = "images/404.png";
        cityName.textContent = "";
        temp.textContent = "";
        humidity.src = "";
        humidity.alt = "";
        humidityDesc1.textContent = "";
        humidityDesc2.textContent = "";
        wind.src = "";
        wind.alt = "";
        windDesc1.textContent = "";
        windDesc2.textContent = "";
        icon.src = "";
        icon.alt = "";
        info.textContent = "";
        bookmarkBtnHolder.classList.add("disappear");
        searchInput.classList.remove("focus");
        searchInput.blur();
        console.log(data);
      } else {
        sosContainer.classList.remove("display");
        error.textContent = "";
        sosImage.src = "";
        cityName.textContent = data.name;
        temp.textContent = `${Math.round(data.main.temp)  }C`;
        humidity.src = "images/humidity.png";
        humidityDesc1.textContent = data.main.humidity;
        humidityDesc2.textContent = "Humidity";
        wind.src = "images/wind.png";
        windDesc1.textContent = data.wind.speed;
        windDesc2.textContent = "Wind";
        bookmarkBtnHolder.classList.remove("disappear");
        searchInput.classList.remove("focus");
        searchInput.blur();
        console.log(data);
      }

      if (data.weather[0].main === "Clouds") {
        icon.src = "images/clouds.png";
        info.textContent = data.weather[0].description;
      }
      if (data.weather[0].main === "Haze") {
        icon.src = "images/mist.png";
        info.textContent = data.weather[0].description;
      }
      if (data.weather[0].main === "Mist") {
        icon.src = "images/mist.png";
        info.textContent = data.weather[0].description;
      }
      if (data.weather[0].main === "Clear") {
        icon.src = "images/clear.png";
        info.textContent = data.weather[0].description;
      }
      if (data.weather[0].main === "Rain") {
        icon.src = "images/rain.png";
        info.textContent = data.weather[0].description;
      }
      if (data.weather[0].main === "Drizzle") {
        icon.src = "images/drizzle.png";
        info.textContent = data.weather[0].description;
      }
      if (data.weather[0].main === "Snow") {
        icon.src = "images/snow.png";
        info.textContent = data.weather[0].description;
      }
    }, 3000);
  } catch (err) {
    console.log("Not found", err.mesage);
  }
}

export {defaultCity, showCity };

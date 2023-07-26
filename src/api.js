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

export default defaultCity;

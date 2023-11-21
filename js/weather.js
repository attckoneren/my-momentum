const API_KEY = config.apikey;
function onGeoAllGood(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temperature = document.querySelector(".weather div:first-child");
      const weatherIcon = document.querySelector(".weather div:nth-child(2)");
      const city = document.querySelector(".weather div:last-child");
      temperature.innerText = Math.floor(data.main.temp) + "º";
      city.innerText = data.name;

      if (data.weather && data.weather[0] && data.weather[0].icon) {
        const iconCode = data.weather[0].icon;
        const iconUrl = `icon-img/${iconCode}.png`;
        const iconImage = document.createElement("img");

        weatherIcon.appendChild(iconImage);
        iconImage.src = iconUrl;
      }
    });
}

function onGeoError() {
  alert("I can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoAllGood, onGeoError);

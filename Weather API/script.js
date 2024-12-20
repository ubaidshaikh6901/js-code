const apiKey = "e83fc483177d662e1c12ff57a07b8382";

const cityDropdown = document.getElementById("citySelector");
const fetchWeatherButton = document.getElementById("getWeather");
const weatherCard = document.getElementById("weatherDisplay");
const cityNameEl = document.getElementById("location");
const temperatureEl = document.getElementById("temperature");
const descriptionEl = document.getElementById("description");
const humidityEl = document.getElementById("humidity");


function loadCities() {
    fetch("cities.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to load city data.");
            }
            return response.json();
        })
        .then((cities) => {
            cities.forEach((city) => {
                const option = document.createElement("option");
                option.value = city.name;
                option.textContent = `${city.name}, ${city.country}`;
                cityDropdown.appendChild(option);
            });
        })
        .catch((error) => {
            console.error("Error loading cities:", error);
            alert("Unable to load city data. Please try again later.");
        });
}

function fetchWeatherData(cityName) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error("City not found. Please select a valid city.");
                }
                throw new Error("Failed to fetch weather data.");
            }
            return response.json();
        })
        .then((weatherData) => {
            displayWeather(weatherData);
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
            alert(error.message);
        });
}

function displayWeather(weatherData) {
    weatherCard.style.display = "block";
    cityNameEl.textContent = weatherData.name;
    temperatureEl.textContent = `Temperature: ${(weatherData.main.temp - 273.15).toFixed(2)}°C`;
    descriptionEl.textContent = `Description: ${weatherData.weather[0].description}`;
    humidityEl.textContent = `Humidity: ${weatherData.main.humidity}%`;
}

fetchWeatherButton.addEventListener("click", () => {
    const selectedCity = cityDropdown.value;

    if (!selectedCity) {
        alert("Please select a city from the dropdown menu.");
        return;
    }

    fetchWeatherData(selectedCity);
});

loadCities();
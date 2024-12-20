const apiBaseUrl = "https://disease.sh/v3/covid-19";


const countryDropdown = document.getElementById("countrySelector");
const fetchDataButton = document.getElementById("getCovidData");
const covidCard = document.getElementById("covidDisplay");
const countryNameEl = document.getElementById("country");
const casesEl = document.getElementById("cases");
const deathsEl = document.getElementById("deaths");
const recoveredEl = document.getElementById("recovered");


function loadCountries() {
  fetch(`${apiBaseUrl}/countries`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load country data.");
      }
      return response.json();
    })
    .then((countries) => {

      const asianCountries = countries.filter(country => country.continent === 'Asia');

      
      asianCountries.forEach((country) => {
        const option = document.createElement("option");
        option.value = country.country;
        option.textContent = country.country;
        countryDropdown.appendChild(option);
      });
    })
    .catch((error) => {
      console.error("Error loading countries:", error);
      alert("Unable to load country data. Please try again later.");
    });
}



function fetchCovidData(country) {
  const apiUrl = `${apiBaseUrl}/countries/${country}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Country not found. Please select a valid country.");
        }
        throw new Error("Failed to fetch COVID-19 data.");
      }
      return response.json();
    })
    .then((data) => {
      displayCovidData(data);
    })
    .catch((error) => {
      console.error("Error fetching COVID-19 data:", error);
      alert(error.message);
    });
}



function displayCovidData(data) {
  covidCard.style.display = "block";
  countryNameEl.textContent = data.country;
  casesEl.textContent = `Total Cases: ${data.cases.toLocaleString()}`;
  deathsEl.textContent = `Deaths: ${data.deaths.toLocaleString()}`;
  recoveredEl.textContent = `Recovered: ${data.recovered.toLocaleString()}`;
}


fetchDataButton.addEventListener("click", () => {
  const selectedCountry = countryDropdown.value;

  if (!selectedCountry) {
    alert("Please select a country from the dropdown menu.");
    return;
  }

  fetchCovidData(selectedCountry);
});


loadCountries();

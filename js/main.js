const submitButton = document.querySelector("button.get");
const resetButton = document.querySelector("button.refresh");
const weatherForm = document.querySelector("form");
const input = document.querySelector("input");
const weatherResults = document.querySelector("section.results");
const weatherResultsDiv = document.querySelector("div.weather-results");
let locationIcon = document.querySelector(".weather-icon");

//console.log(weatherResults);

submitButton.addEventListener("mouseover", function () {
  submitButton.style.backgroundColor = "#a6a6a6";
});

submitButton.addEventListener("mouseout", function () {
  submitButton.style.backgroundColor = "#ccc";
});

submitButton.addEventListener("click", function () {
  resetButton.classList.remove("hide");
  weatherResultsDiv.classList.remove("hide");
  submitButton.classList.add("hide");
});

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
  getData(value);
  weatherResults.classList.add("format-results");
  //console.log(value);
});

const apiKey = "8cab29e5fa808f596f9ebd7f36f47fb6";
const getData = async function (value) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=metric`
  );
  const data = await res.json();
  displayWeather(data);
  console.log(data);
};

const displayWeather = function (data) {
  weatherResults.innerHTML = `<p>City: ${data.name}<br>
  Temperature: ${data.main.temp} C<br>
  Feels like: ${data.main.feels_like} C<br>
  Minimum Temperature: ${data.main.temp_min} C<br>
  Maximum Temperature: ${data.main.temp_max} C<br>
  Conditions: ${data.weather[0].description}<br>
  Wind speed: ${data.wind.speed} kmph
  </p>`;
  const { icon } = data.weather[0];
  locationIcon.innerHTML = `<img src = "icons/${icon}.png" />`;
};

resetButton.addEventListener("mouseover", function () {
  resetButton.style.backgroundColor = "#a6a6a6";
});

resetButton.addEventListener("mouseout", function () {
  resetButton.style.backgroundColor = "#ccc";
});

resetButton.addEventListener("click", function () {
  resetButton.classList.add("hide");
  weatherResultsDiv.classList.add("hide");
  submitButton.classList.remove("hide");
});

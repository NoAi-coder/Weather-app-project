//PlusW4 Feature #1
//In your project, display the current date and time using JavaScript: Tuesday 16:00
function getCurrentTime() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let year = now.getFullYear();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[now.getMonth()];
  let date = now.getDate();
  let hour = now.getHours();
  let minutes = now.getMinutes();

  let currentTime = document.querySelector(".current-time");
  currentTime.innerHTML = `Now: ${day} at ${hour}:${minutes}, ${month} ${date}, ${year}`;
}
getCurrentTime();

//️Plus W4 Feature #2
//Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.
let headCity = document.querySelector(".h1city");
let citySearch = document.querySelector(".search_city");

function cityInput(event) {
  event.preventDefault();
  let yourCity = document.querySelector("#search-input");
  headCity.innerHTML = yourCity.value;

  function showTemp(response) {
    let temperature = Math.round(response.data.main.temp);
    console.log(temperature);
    let headding3 = document.querySelector("h3");
    headding3.innerHTML = `${temperature}°C`;
  }
  let apiKey = "27ddfc7325668fadfd863bab705e25e8";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${yourCity.value}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showTemp);
}
citySearch.addEventListener("submit", cityInput);

//Plus W5 Project - Search function

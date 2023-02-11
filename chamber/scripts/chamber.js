//get last modified date
let lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = lastModified;

// responsive hamburger menu
const menubutton= document.querySelector("#menu-button");
const menuitems = document.querySelector("nav ul");

menubutton.addEventListener("click", () => {
    menubutton.classList.toggle("open");
    menuitems.classList.toggle("open");
    menubutton.classList.toggle("close");
});

// visit counter
const displayVisits = document.querySelector(".visits");
// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));
// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
    numVisits.valueOf = Number(window.localStorage.getItem("visits-ls"));
//   displayVisits.textContent = numVisits; ---------- Actual one
} else {
  displayVisits.textContent = "It's your first visit!";
}
// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

// WEATHER
const weatherIcon = document.querySelector('#weatherIcon');
const captionDesc = document.querySelector('#weatherDesc');
const currentTemp = document.querySelector('#weatherTemp');


const url = 'https://api.openweathermap.org/data/2.5/weather?q=Lagos,566&appid=82eed2cbba4b15bb351f841f1e08d31a&units=imperial'; 


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

function displayForecastWeather(data) {
    // console.log(data);
    const highs = document.querySelector("#forecastHigh");
    const lows = document.querySelector("#forecastLow");
  
    for (let i = 0; i < 3; i++) {
      // console.table(data.daily[i]);
      const dayHigh = document.createElement("li");
      const dayLow = document.createElement("li");
  
      dayHigh.innerHTML = `${data.list[i].main.temp_max}&deg;F`;
      // console.log(dayHigh);
      dayLow.innerHTML = `${data.list[i].main.temp_min}&deg;F`;
      // console.log(dayLow);
  
      highs.appendChild(dayHigh);
      lows.appendChild(dayLow);
    }
  }
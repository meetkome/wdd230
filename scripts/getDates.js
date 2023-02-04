// Get copyright year
const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;

// Get last modified date
let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;

// HArmburger/Navigation Menu
const menubutton = document.querySelector("#menu-button");
const menuitems = document.querySelectorAll(".menu-item");
// menuitems will be a Node List of the list items

menubutton.addEventListener("click", () => {
	menuitems.forEach((item) => item.classList.toggle("open"));
	menubutton.classList.toggle("close");
});
// dark mode 
const modeButton = document.querySelector("#mode");
const mainArea = document.querySelector("main");
modeButton.addEventListener("click", () => {
	modeButton.classList.toggle("dark");
	mainArea.classList.toggle("dark");
})

// visit counter
const displayVisits = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
  displayVisits.textContent = numVisits;
} else {
  displayVisits.textContent = "This is your first visit!";
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

//submit form
const submitBtn = document.querySelector("#submitBtn");
const submitReview = document.querySelector(".submitReview tbody");
const reviewForm = document.querySelector("#reviewForm");

document.querySelector("#reviewForm").addEventListener("submit", function (event) {
  event.preventDefault();
});

submitBtn.addEventListener("click", () => {
  submitReview.textContent = "";
  const inputName = document.querySelector("input[name=fname]");
  addLines("Name", inputName.value);
  const inputEmail = document.querySelector("input[name=email]");
  addLines("Email", inputEmail.value);
  const inputRating = document.querySelector("input[type=range]");
  addLines("Rating", inputRating.value);
  const inputUsername = document.querySelector("input[name=username1]");
  addLines("Username", inputUsername.value);
});

function addLines(field, value) {
  const column1 = document.createElement("td");
  column1.textContent = field;
  const column2 = document.createElement("td");
  column2.textContent = value;
  const row = document.createElement("tr");
  row.appendChild(column1);
  row.appendChild(column2);
  submitReview.appendChild(row);
}

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
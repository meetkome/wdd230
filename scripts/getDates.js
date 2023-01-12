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
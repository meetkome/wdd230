//get last modified date
let lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = lastModified;

// responsive hamburger menu
const menulist= document.querySelector("#menu-button");
const navbar = document.querySelector(".navbar");
menulist.onclick = () =>{
  menulist.classList.toggle('bx-x');
  navbar.classList.toggle('open')
}

// menubutton.addEventListener("click", () => {
//     menubutton.classList.toggle("bx-x");
//     menuitems.classList.toggle("open");
//     menubutton.classList.toggle("close");
// });

// visit counter
// const displayVisits = document.querySelector(".visits");
// // get the stored value in localStorage
// let numVisits = Number(window.localStorage.getItem("visits-ls"));
// // determine if this is the first visit or display the number of visits.
// if (numVisits !== 0) {
//     numVisits.valueOf = Number(window.localStorage.getItem("visits-ls"));
// //   displayVisits.textContent = numVisits; ---------- Actual one
// } else {
//   displayVisits.textContent = "It's your first visit!";
// }
// // increment the number of visits.
// numVisits++;
// // store the new number of visits value
// localStorage.setItem("visits-ls", numVisits);

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

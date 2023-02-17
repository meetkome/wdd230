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

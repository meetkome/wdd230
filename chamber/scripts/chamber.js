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

// let hamburger = document.querySelector("#hamburger");
// let closeMenu = document.querySelector("#close-button");

// hamburger.addEventListener("click", function() {
//     document.querySelector("#menu-items").classList.toggle("mobileMenu");
//     hamburger.classList.toggle("hide");
//     closeMenu.classList.toggle("show");
//     });

// closeMenu.addEventListener("click", function() {
//     document.querySelector("#menu-items").classList.toggle("mobileMenu");
//     hamburger.classList.toggle("hide");
//     closeMenu.classList.toggle("show");
//     });
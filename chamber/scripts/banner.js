
document.querySelector(".bannerClose").addEventListener("click", function (){
  this.closest(".banner").style.display = "none";
});

// const today = new Date();

// if (today.getDay() == 0 || today.getDay() >= 4) {
//   document.querySelector("#banner").className = "hide";
// } else {
//   document.querySelector("#banner").className = "show";  
// }

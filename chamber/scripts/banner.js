const today = new Date();

if (today.getDay() == 0 || today.getDay() >= 4) {
  document.querySelector("#banner").className = "hide";
} else {
  document.querySelector("#banner").className = "show";  
}

const bannerClose = document.querySelector('#close-banner');

bannerClose.addEventListener('click', function() {
    banner.style.display = "none";
// document.querySelector(".bannerClose").addEventListener("click", function(){
//   this.closest("#banner").style.display = "none";
});

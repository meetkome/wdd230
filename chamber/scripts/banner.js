// const today = new Date();

// if (today.getDay() == 0 || today.getDay() >= 4) {
//   document.querySelector("#banner").className = "hide";
// } else {
//   document.querySelector("#banner").className = "show";  
// }



const banner = document.querySelector('#banner');
var DayOfWeek = new Date().getDay();

if (DayOfWeek == 1 || DayOfWeek == 2 || DayOfWeek == 3) {
    banner.style.display = "block";

} else {
    banner.style.display = "none";
}

const bannerClose = document.querySelector('#close-banner');

bannerClose.addEventListener('click', function() {
    banner.style.display = "none";

});



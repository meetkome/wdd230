// Get copyright year
const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;

// Get last modified date
let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;
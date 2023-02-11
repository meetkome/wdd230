const memberUrl = "data/members.json";
 
async function getMembers() {
    try {
        const response = await fetch(memberUrl);
      if (response.ok) {
        const data = await response.json();
        console.log(data.members);
        displayMembers(data.members);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  getMembers();
 
  function displayMembers(members) {

    members.forEach((member) => {
      const memberCards = document.querySelector("#members");
        // cards.innerHTML = "";
      const card = document.createElement("section");

    
      const name = document.createElement("h2");
      name.innerHTML = member.name;

      const address = document.createElement("p");
      address.innerHTML = member.address;

      const phone = document.createElement("p");
      phone.innerHTML = member.phone;

      const website = document.createElement("p");
      website.innerHTML = `<a href="${member.website}" target="_blank">Website</a>`;

      const logo = document.createElement("img");
      logo.setAttribute("src", member.logo);
      logo.setAttribute("alt", `${member.name} logo`);
      logo.setAttribute("loading", "lazy");
      logo.setAttribute("width", "200");
      logo.setAttribute("height", "200");


      
      const memberLevel = document.createElement("p");
      memberLevel.innerHTML = member.membership;
      
      
      card.appendChild(logo);
      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(website);
      card.appendChild(memberLevel);
      memberCards.appendChild(card);
});
}
 
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("div#members");
 
// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.
 
gridbutton.addEventListener("click", () => {
  // example using arrow function
  display.classList.add("grid");
  display.classList.remove("list");
});
 
listbutton.addEventListener("click", showList); // example using defined function
 
function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}
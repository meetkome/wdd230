const url = "data/members.json";

async function getMembers() {
    try {
        const response = await fetch(url);
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


  const displayMembers = (members) => {
    const cards = document.querySelector("#members");
    cards.innerHTML = "";
    members.forEach((member) => {

        const card = document.createElement("section");
    
      
        let name = document.createElement("h2");
        name.innerHTML = member.name;

        let address = document.createElement("p");
        address.innerHTML = member.address;

        let phone = document.createElement("p");
        phone.innerHTML = member.phone;

        let website = document.createElement("p");
        website.innerHTML = `<a href="${member.website}" target="_blank">Website</a>`;

        let logo = document.createElement("img");
        logo.setAttribute("src", member.logo);
        logo.setAttribute("alt", `${member.name} logo`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "200");
        logo.setAttribute("height", "200");
        
        let memberLevel = document.createElement("p");
        memberLevel.innerHTML = member.membership;
        
        
        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(memberLevel);
        cards.appendChild(card);
    });
}

//display in grid and list 
const gridbtn = document.querySelector("#grid");
const listbtn = document.querySelector("#list");
const display = document.querySelector("div#members");

gridbtn.addEventListener("click", showGrid);
listbtn.addEventListener("click", showList);

function showGrid() {
  display.classList.add("grid");
	display.classList.remove("list");
}
function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}


  
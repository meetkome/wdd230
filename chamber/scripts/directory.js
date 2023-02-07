// const CompaniesElement = document.querySelector("#members");
// const memberUrl = "data/members.json";
// const gridBtn = document.querySelector("#grid");
// const listBtn = document.querySelector("#list");

// async function getMembers() {
//     const response = await fetch(memberUrl);
//     const data = await response.json();
//     keys = Object.keys(data);
//     displayCompanies(data.members);
//     }

// getMembers();

//     function displayCompanies(data) {
//         const activeBtn = document.querySelector(".active");
//         if (activeBtn.id === "gridBtn") {
//             CompaniesElement.classList.remove("list");
//             CompaniesElement.classList.add("grid");
//             // For Each Name in the data generate a card with the name , address , website, number and member level
//             data.forEach((name) => {
//                 const company = document.createElement("div");
//                 company.classList.add("company-card");
//                 company.innerHTML = `
//                 <div class="company-logo">
//                     <img src="images/${name.logo}" alt="${name.name}">
//                 </div>
//                 <div class="company-info">
//                     <h3>${name.name}</h3>
//                     <p>${name.address}</p>
//                     <a href=https://${name.website}>${name.website}</a>
//                     <p>${name.phone}</p>
//                     <p>${name.membership}</p>
//                 </div>
//                 `;
//                 CompaniesElement.appendChild(company);
//             });

//         } else {
//         CompaniesElement.classList.add("list");
//         CompaniesElement.classList.remove("grid");
//         const list = document.createElement("div"); 
//         list.classList.add("company-list"); 
        
//         //For Each name Generate a div with the name , address , website, number and member level but no logo and no card
//         data.forEach((name) => {
//             const company = document.createElement("section");
//             company.classList.add("company-info");
//            company.innerHTML = `
//                 <h3>${name.name}</h3>
//                 <p>${name.address}</p>
//                 <a href=https://${name.website}>${name.website}</a>
//                 <p>${name.phone}</p>
//                 <p>${name.membership}</p>
//             `;
//             CompaniesElement.appendChild(company);
//         }
//         );
//     }
//     }

//     // Event Listeners
//     gridBtn.addEventListener("click", () => {
//         CompaniesElement.innerHTML = "";
//         listBtn.classList.remove("active");
//         gridBtn.classList.add("active");
//         getCompanies();
//     });

//     listBtn.addEventListener("click", () => {
//         CompaniesElement.innerHTML = "";
//         gridBtn.classList.remove("active");
//         listBtn.classList.add("active");
//         getMembers();
//     });


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
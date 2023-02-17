const memberUrl = "data/members.json";
 
async function getMembers() {
    try {
        const response = await fetch(memberUrl);
      if (response.ok) {
        const data = await response.json();
        const members = data.members.filter((membership) => membership.membership == "Gold" || membership.membership == "Silver")
        console.log(members);
        displayMembers(members);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  getMembers();

  function displayMembers(members) {
    for (let i = 0; i < 3; i++) {
        index = Math.floor(Math.random() * members.length);
        chosenMember = members[index];
        members.splice(index,1);
        displaySpotlight(chosenMember);
    }
  }

  // const memberCards = document.querySelector("#card");
  const memberCards = document.querySelector(".cards");
    function displaySpotlight(member)  {
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
    // card.appendChild(memberLevel);
    memberCards.appendChild(card);
  }




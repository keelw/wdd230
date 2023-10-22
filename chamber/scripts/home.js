//--------------Home Page Banner--------------//
// todays date in ms
const nowMS = new Date();

let banner = document.querySelector("#banner");
let closeButton = document.querySelector("#close");
const day = nowMS.getDay();

closeButton.addEventListener('click', () => {
	banner.setAttribute("class", "hide");
})

if (nowMS.getDay() == 2 || nowMS.getDay() == 3 || nowMS.getDay() == 4) {
	banner.setAttribute("class", "show");
}

//-------------Member Spotlights-------------//
// variables
const urlSpotlight = "https://keelw.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector("#directory");
const display = document.querySelector("article");

// get the data from the JSON file
async function getDirectoryData() {
    response = await fetch(urlSpotlight);

    if (response.ok) {
        const data = await response.json();
        displayDirectory(data.businesses);
    }
}

// display the data
const displayDirectory = (businesses) => {
	let i = 0;
	while (i < 2) {
		randomMemberNumber = parseInt(Math.random() * 7);
		
		if (businesses[randomMemberNumber].membership == "Gold" || businesses[randomMemberNumber].membership == "Silver") {
			GetBusinessCard(businesses[randomMemberNumber]);
			i++;
		}
	}
}

function GetBusinessCard(member) {
	// get the variables declared/initialized
	
	// create the card 
	let card = document.createElement("section");
	card.setAttribute("class", "card");
	
	// create the header
	let cardHeader = document.createElement("h2");
	
	// create the logo
	let logo = document.createElement("img");
	logo.setAttribute("class", "directory_logo");
	logo.setAttribute("src", member.img);
	logo.setAttribute("alt", member.description)

	// create other html elements 
	let level = document.createElement("p");
	level.setAttribute("class", "level");
	let address = document.createElement("p");
	level.setAttribute("class", "address");
	let phone = document.createElement("p");
	level.setAttribute("class", "phone");
	let website = document.createElement("p");
	level.setAttribute("class", "website");

	// fill the elements document
	cardHeader.textContent = member.name;
	level.textContent = `Membership Level: ${member.membership}`;
	address.textContent = member.address;
	phone.textContent = member.phone;
	website.innerHTML = `<a href="${member.url}">${member.name} Website</a>`;

	// fill the cards
	card.appendChild(cardHeader);
	card.appendChild(logo);
	card.appendChild(level);
	card.appendChild(address);
	card.appendChild(phone);
	card.appendChild(website);

	// add the whole card to the document
	cards.appendChild(card);
}

getDirectoryData();

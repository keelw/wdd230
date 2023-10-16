// variables
const url = "https://keelw.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector("#directory");
const gridButton = document.querySelector("#grid")
const listButton = document.querySelector("#list");
const display = document.querySelector("article");

// get the data from the JSON file
async function getDirectoryData() {
    response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        displayDirectory(data.businesses);
    }
}

// display the data
const displayDirectory = (businesses) => {
    businesses.forEach((member) => {
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
    })
}



getDirectoryData();


const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");
        let dob = document.createElement("p");
        let place = document.createElement("p");

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "300px");
        portrait.setAttribute("height", "300px");
        dob.textContent = `Date of Birth: ${prophet.birthdate}`;
        place.textContent = `Place of Birth: ${prophet.birthplace}`;

        card.appendChild(fullName);
        card.appendChild(dob);
        card.appendChild(place);
        card.appendChild(portrait);
        
        cards.appendChild(card);
    })
}

gridButton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listButton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}
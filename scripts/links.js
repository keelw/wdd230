const baseURL = "https://keelw.github.io/wdd230/";
const linksURL = "https://keelw.github.io/wdd230/data/links.json";
const linkList = document.querySelector("#link-list");

async function getLinks() {
    const response = await fetch(linksURL);

    if (response.ok) {
        const data = await response.json();
        displayLinks(data.weeks);
    }
}

const displayLinks = (weeks) => {
    // loop through the array of weeks
    weeks.forEach((week) => { 
        const listItem = document.createElement("li");
        linkList.appendChild(listItem);
        listItem.innerHTML = `${week.week}:`;

        // loop through each link section
        week.links.forEach((link) => {
            console.log(link.title);                console.log(link.url);
             listItem.innerHTML += ` <a href="${link.url}">${link.title}</a> | `;
            })
    })
}

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

getLinks();
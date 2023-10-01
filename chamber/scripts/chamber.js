const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const visitsMessage = document.querySelector('#visit-message');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

let lastModifiedString = new Date(document.lastModified);
oLastModif = lastModifiedString.toUTCString();
document.getElementById('lastModified').innerHTML = `Last modified: ${oLastModif}`;

let d = new Date();
let currentYear = d.getFullYear();
document.getElementById('copyRight').innerHTML = `&copy ${currentYear} William Keel &#127482;&#127480`;

//Below is the function for the visit-counter function of the page

// Get the stored value of the visits key in local storage
// if it does not exist, create it and assign 0.

// milliseconds to days constant
const msToDays = 84600000;

// todays date in ms
const today = Date.now();

// Get the stored value of the last visit key in local storage
// if it does not exist, create it and assign it to now.
let lastVisit = Number(window.localStorage.getItem("lastVisit-ls")) || today;

// Determine when the last visit was... if it didn't happen then display a
// welcome message. 
if (lastVisit == today) {
	visitsMessage.innerHTML = "Welcome! Let us know if you have any questions.";
	localStorage.setItem("lastVisit-ls", today);
}

// If the last visit was less than a day ago, display a message 
if ((today - msToDays < lastVisit)) {
	visitsMessage.innerHTML = "Back so soon! Awesome!";
	localStorage.setItem("lastVisit-ls", today);
}

// otherwise, display the last time the user visited. 
else {
	let lastInDays = Math.round((today - lastVisit) / msToDays);

	if (lastInDays == 1) {
		visitsMessage.innerHTML = `You last visited ${lastInDays} day ago.`;
	}

	else {
		visitsMessage.innerHTML = `You last visited ${lastInDays} days ago.`;
	}

	localStorage.setItem("lastVisit-ls", today);	
}


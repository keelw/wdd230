const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const header = document.querySelector("header");
const title = document.querySelector("h2");
const body = document.querySelector("body");

var links = document.querySelectorAll('a'), i;


modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) 
    {
		main.style.background = "#000";
		main.style.color = "#fff";

        header.style.background = "#000";
        header.style.color = "#fff";
        title.style.color = "#fff";
        title.style.background = "#000";
        body.style.background = "#000"
        body.style.color = "#fff";

        for (i = 0; i < links.length; ++i) {
            links[i].style.color = "#fff";
            links[i].style.background = "#000";
        }

		modeButton.textContent = "✖";
	} 
    
    else 
    {
		main.style.background = "#fff";
		main.style.color = "#000";
        header.style.background = "#fff";
        header.style.color = "#000";
        title.style.color = "#000";
        title.style.background = "#fff";
        body.style.background = "#fff"
        body.style.color = "#000";

        
        for (i = 0; i < links.length; ++i) {
            links[i].style.color = "#000";
            links[i].style.background = "#fff";
        }

		modeButton.textContent = "☑️";
	}
});

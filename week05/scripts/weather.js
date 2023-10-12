const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=c1b05e55621743f917712043cb36e612'

async function apiFetch() {
    try {
        response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }

        else {
            throw Error(await response.text());
        }
    }
    catch (err) {
        console.log(err);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;

    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = `${desc}`;
}

apiFetch();
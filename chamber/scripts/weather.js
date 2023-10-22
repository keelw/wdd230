//****************For Weather*****************/
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const description = document.querySelector("#description")
const day1 = document.querySelector("#day1");
const day2 = document.querySelector("#day2");
const day3 = document.querySelector("#day3");
const lastUpdated = document.querySelector("#last-updated");
let now = new Date();

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.52&lon=-112.03&units=imperial&appid=c1b05e55621743f917712043cb36e612'

async function apiFetch() {
    try {
        response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
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
    currentTemp.innerHTML = `Current temp: ${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;

    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = `${desc}`;
}

apiFetch();

// for forcast
const forcastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.52&lon=-112.03&cnt=40&units=imperial&appid=c1b05e55621743f917712043cb36e612'

async function forcastAPIFetch() {
    try {
        response = await fetch(forcastURL);

        if (response.ok) {
            const data = await response.json();
            displayForcastResults(data);
        }

        else {
            throw Error(await response.text());
        }
    }
    catch (err) {
        console.log(err);
    }
}

function displayForcastResults(data) {
    date1 = new Date(data.list[0].dt * 1000);
    date2 = new Date(data.list[8].dt * 1000);
    date3 = new Date(data.list[16].dt * 1000);

    day1.innerHTML = `High temps for ${date1.toDateString()}:   ${data.list[0].main.temp_max}&deg;F`;
    day2.innerHTML = `High temps for ${date2.toDateString()}:   ${data.list[8].main.temp_max}&deg;F`;
    day3.innerHTML = `High temps for ${date3.toDateString()}:   ${data.list[16].main.temp_max}&deg;F`;
}

lastUpdated.innerHTML = `Last updated: ${now}`;

forcastAPIFetch();
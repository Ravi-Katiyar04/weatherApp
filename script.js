
// Selecting elements from the DOM
const userLocation = document.getElementById("userLocation");
const converter = document.getElementById("converter");
const searchIcon = document.querySelector(".fa-search");

// Selecting weather display elements
let cloudIcon = document.querySelector(".cloudIcon");
let temp = document.querySelector(".temp");
let feelsLike = document.querySelector(".feels-like");
let cloud = document.querySelector(".cloud");
let dateTime = document.querySelector(".date-time");
let locationName = document.querySelector(".location");

// Selecting today's weather details
let humidity = document.querySelector(".humidity h2");
let windSpeed = document.querySelector(".wind-speed h2");
let sunrise = document.querySelector(".sunrise-sunset div:first-child h2");
let sunset = document.querySelector(".sunrise-sunset div:last-child h2");
let clouds = document.querySelector(".clouds h2");
let uvIndex = document.querySelector(".uv h2");
let pressure = document.querySelector(".pressure h2");

// Global variables to track unit and store last weather data
let currentUnit = "C";
let lastData = null;

const API_BASE_URL = `https://api.weatherapi.com/v1/forecast.json?key=7dcda9ca408d4b239c750906252603&days=3&aqi=no&alerts=no&q=`;

// Fetch weather data for a specific location entered by the user
async function getWeather() {
    const city = userLocation.value.trim();
    if (!city) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const lat = parseFloat(position.coords.latitude.toFixed(4));
                const lon = parseFloat(position.coords.longitude.toFixed(4));
                console.log("User location:", lat, lon);
                try {
                    const response = await fetch(`${API_BASE_URL}${lat},${lon}`);
                    if (!response.ok) throw new Error("Location not found");
                    const data = await response.json();
                    lastData = data;
                    updateWeatherUI(data);
                } catch (error) {
                    alert("Error fetching location weather: " + error.message);
                }
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
        return;
    }
    try {
        const response = await fetch(API_BASE_URL + city);
        if (!response.ok) throw new Error("City not found");
        const data = await response.json();
        lastData = data;
        updateWeatherUI(data);
    } catch (error) {
        alert("Error fetching weather data: " + error.message);
    }
}

// Update UI with weather data (always in Celsius)
function updateWeatherUI(data) {
    // Use Celsius values from API
    temp.innerHTML = `${data.current.temp_c}°C`;
    feelsLike.innerHTML = `Feels like ${data.current.feelslike_c}°C`;
    cloud.innerHTML = data.current.condition.text;
    humidity.innerHTML = `${data.current.humidity} %`;
    windSpeed.innerHTML = `${data.current.wind_kph} km/h`;
    sunrise.innerHTML = data.forecast.forecastday[0].astro.sunrise;
    sunset.innerHTML = data.forecast.forecastday[0].astro.sunset;
    clouds.innerHTML = `${data.current.cloud} %`;
    pressure.innerHTML = `${data.current.pressure_mb} mb`;
    uvIndex.innerHTML = data.current.uv;
    cloudIcon.innerHTML = `<i class="fa ${getWeatherIcon(data.current.condition.code)} fa-5x"></i>`;
    locationName.innerHTML = data.location.name + ", " + data.location.country;
    dateTime.innerHTML = new Intl.DateTimeFormat("en-GB", {
        weekday: "long",
        hour: "numeric",
        minute: "numeric",
        month: "long",
        day: "numeric",
        hour12: true
    }).format(new Date());

    // Update forecast
    const forecastContainer = document.querySelector(".forecast");
    forecastContainer.innerHTML = ""; // Clear forecast before appending
    data.forecast.forecastday.forEach((day) => {
        let div = document.createElement("div");
        div.className = "desc-item";
        div.innerHTML += `    
            <h2>${new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date(day.date))}</h2>
            <i class="fa ${getWeatherIcon(day.day.condition.code)} fa-2x"></i>
            <h2>${day.day.condition.text}</h2>
            <h2>${day.day.avgtemp_c}°C</h2>           
        `;
        forecastContainer.append(div);
    });

    // If current unit is Fahrenheit, convert the displayed values
    if (currentUnit === "F") {
        convertToFahrenheit();
    }
}

// Helper function to get weather icons
function getWeatherIcon(conditionCode) {
    const iconMap = {
        1000: "fa-sun",         // Clear sky
        1003: "fa-cloud-sun",     // Partly cloudy
        1006: "fa-cloud",         // Cloudy
        1009: "fa-smog",          // Overcast
        1030: "fa-smog",          // Mist
        1063: "fa-cloud-rain",    // Patchy rain
        1087: "fa-bolt",          // Thunderstorm
        1114: "fa-snowflake",     // Snow
    };
    return iconMap[conditionCode] || "fa-cloud";
}

// Convert UI temperatures from Celsius to Fahrenheit
function convertToFahrenheit() {
    // Convert main temperature
    let tempC = parseFloat(temp.textContent);
    temp.textContent = `${(tempC * 9 / 5 + 32).toFixed(1)}°F`;

    // Convert "feels like"
    let feelsC = parseFloat(feelsLike.textContent.match(/[\d.]+/)[0]);
    feelsLike.textContent = `Feels like ${(feelsC * 9 / 5 + 32).toFixed(1)}°F`;

    // Convert forecast temperatures
    const forecastItems = document.querySelectorAll(".forecast .desc-item");
    forecastItems.forEach((item) => {
        const tempElem = item.querySelector("h2:last-child");
        if (tempElem) {
            let forecastC = parseFloat(tempElem.textContent);
            tempElem.textContent = `${(forecastC * 9 / 5 + 32).toFixed(1)}°F`;
        }
    });
}

// Converter event listener toggles the unit and updates the UI accordingly
converter.addEventListener("change", () => {
    if (currentUnit === "C") {
        currentUnit = "F";
        convertToFahrenheit();
    } else {
        currentUnit = "C";
        // Reapply the latest data in Celsius
        if (lastData) {
            updateWeatherUI(lastData);
        }
    }
});

getWeather(); // Fetch weather data for the default location (if any)

searchIcon.addEventListener("click", () => {
    if (userLocation.value.trim()) {
        console.log(userLocation.value);
        getWeather(userLocation.value);
    } else {
        alert("Please enter a city name.");
    }
});


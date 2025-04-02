
// // Selecting input fields
// const userLocation = document.getElementById("userLocation");
// const converter = document.getElementById("converter");

// // Selecting weather display elements
// const temp = document.querySelector(".temp");
// const cloud = document.querySelector(".cloud");
// const dateTime = document.querySelector(".date-time");
// const locationName = document.querySelector(".location");

// // Selecting today's weather details
// const humidity = document.querySelector(".humidity h2");
// const windSpeed = document.querySelector(".wind-speed h2");
// const sunrise = document.querySelector(".sunrise-sunset div:first-child h2");
// const sunset = document.querySelector(".sunrise-sunset div:last-child h2");
// const uvIndex = document.querySelector(".uv h2");
// const pressure = document.querySelector(".pressure h2");

// // Selecting weekly weather details
// const weekHumidity = document.querySelectorAll(".week-desc .humidity h2");

// // Selecting icons and other elements
// const searchIcon = document.querySelector(".fa-search");
// const cloudIcon = document.querySelector(".fa-cloud");

// WEATHER_API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?appid=25479a0d2698e5f637581fc5f0c0567f&q=`;
// WEATHER_DATA_ENDPOINT = `https://api.openweathermap.org/data/3.0/onecall?appid=25479a0d2698e5f637581fc5f0c0567f&exclude=minutely&units=metric&`;

// function findUserLocation() {
//     fetch(WEATHER_API_ENDPOINT + userLocation.value)
//     .then((response) => response.json())
//     .then((data) => {
//         if(data.cod !='' && data.cod!=200){
//             alert(data.message)
//             return;
//         }
//         fetch(WEATHER_DATA_ENDPOINT + `lat=${data.coord.lat}&lon=${data.coord.lon}`)
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data)
//         })
//         // console.log(data.coord.lat, data.coord.lon)
//     })
// }


const apiKey = "b58d08cfa881457a8d6143405251303";
// let userLocation = document.getElementById("userLocation");
// const converter = document.getElementById("converter");
// const searchIcon = document.querySelector(".fa-search");

// // Selecting weather display elements
// let temp = document.querySelector(".temp");
// let cloud = document.querySelector(".cloud");
// let dateTime = document.querySelector(".date-time");
// let locationName = document.querySelector(".location");

// // Selecting today's weather details
// let humidity = document.querySelector(".humidity h2");
// let windSpeed = document.querySelector(".wind-speed h2");
// let sunrise = document.querySelector(".sunrise-sunset div:first-child h2");
// let sunset = document.querySelector(".sunrise-sunset div:last-child h2");
// let uvIndex = document.querySelector(".uv h2");
// let pressure = document.querySelector(".pressure h2");

// // Selecting weekly weather details
// const weekHumidity = document.querySelectorAll(".week-desc .humidity h2");
// const API_BASE_URL = `http://api.weatherapi.com/v1/current.json?key=7dcda9ca408d4b239c750906252603&q=`;

// function findUserLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(async (position) => {
//             const lat = parseFloat((position.coords.latitude).toFixed(4));
//             const lon = parseFloat((position.coords.longitude).toFixed(4));
//             console.log(lat, lon);
//             try {
//                 const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=7dcda9ca408d4b239c750906252603&q=${lat},${lon}&aqi=no`);
//                 if (!response.ok) throw new Error("Location not found");
//                 const data = await response.json();
//                 console.log(data.location.name);
//                 locationName.textContent = data.location.name;
//                 updateWeatherUI(data);
//             } catch (error) {
//                 alert("Error fetching location weather: " + error.message);
//             }
//         });
//     } else {
//         alert("Geolocation is not supported by this browser.");
//     }
// }


// // Fetch weather data for a specific location
// async function getWeather() {
//     if (!userLocation.value.trim()) {
//         findUserLocation();
//         return;
//     }
//     try {
//         const response = await fetch(API_BASE_URL + userLocation.value);
//         if (!response.ok) throw new Error("City not found");
//         const data = await response.json();
//         updateWeatherUI(data);
//     } catch (error) {
//         alert("Error fetching weather data: " + error.message);
//     }
// }

// // Update UI with weather data
// function updateWeatherUI(data) {
//     locationName.textContent = data.location.name;
//     dateTime.textContent = new Date().toLocaleString();
//     temp.textContent = `${data.current.temp_c}°C`;
//     cloud.textContent = data.current.condition.text;
//     humidity.textContent = data.current.humidity;
//     windSpeed.textContent = `${data.current.wind_kph} km/h`;
//     pressure.textContent = `${data.current.pressure_mb} mb`;
//     uvIndex.textContent = data.current.uv;

//     // Updating icons dynamically
//     const cloudIcon = document.querySelector(".fa-cloud");
//     if (cloudIcon) {
//         cloudIcon.className = `fa ${getWeatherIcon(data.current.condition.code)}`;
//     }
// }

// // Get user location weather
// // function findUserLocation() {
// //     if (navigator.geolocation) {
// //         navigator.geolocation.getCurrentPosition(async (position) => {
// //             const lat = parseFloat((position.coords.latitude).toFixed(4));
// //             const lon = parseFloat((position.coords.longitude).toFixed(4));
// //             console.log(lat, lon);
// //             try {
// //                 const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=7dcda9ca408d4b239c750906252603&q=${lat},${lon}&aqi=no`);
// //                 if (!response.ok) throw new Error("Location not found");
// //                 const data = await response.json();
// //                 console.log(data.location.name);
// //                 locationName.textContent = data.location.name;
// //                 updateWeatherUI(data);
// //             } catch (error) {
// //                 alert("Error fetching location weather: " + error.message);
// //             }
// //         });
// //     } else {
// //         alert("Geolocation is not supported by this browser.");
// //     }
// // }

// // Convert temperature between Celsius and Fahrenheit
// converter.addEventListener("change", () => {
//     if (temp.textContent.includes("°C")) {
//         const celsius = parseFloat(temp.textContent);
//         temp.textContent = `${(celsius * 9 / 5 + 32).toFixed(1)}°F`;
//     } else {
//         const fahrenheit = parseFloat(temp.textContent);
//         temp.textContent = `${((fahrenheit - 32) * 5 / 9).toFixed(1)}°C`;
//     }
// });

// // Search for a city's weather
// searchIcon.addEventListener("click", () => {
//     if (userLocation.value.trim()) {
//         console.log(userLocation.value);
//         // Fetch weather data for the entered city
//         getWeather(userLocation.value);
//     } else {
//         alert("Please enter a city name.");
//     }
// });

// // Helper function to get weather icons
// function getWeatherIcon(conditionCode) {
//     const iconMap = {
//         1000: "fa-sun fa-5x", // Clear sky
//         1003: "fa-cloud-sun fa-5x", // Partly cloudy
//         1006: "fa-cloud fa-5x", // Cloudy
//         1009: "fa-smog fa-5x", // Overcast
//         1030: "fa-smog fa-5x", // Mist
//         1063: "fa-cloud-rain fa-5x", // Patchy rain
//         1087: "fa-bolt fa-5x", // Thunderstorm
//         1114: "fa-snowflake fa-5x", // Snow
//     };
//     return iconMap[conditionCode] || "fa-cloud fa-5x";
// }

// getWeather();


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
let uvIndex = document.querySelector(".uv h2");
let pressure = document.querySelector(".pressure h2");

// Selecting weekly weather details
const weekHumidity = document.querySelectorAll(".week-desc .humidity h2");

const API_BASE_URL = `https://api.weatherapi.com/v1/current.json?key=7dcda9ca408d4b239c750906252603&q=`;

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
                    const response = await fetch(`${API_BASE_URL}${lat},${lon}&aqi=no`);
                    if (!response.ok) throw new Error("Location not found");
                    const data = await response.json();
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
        updateWeatherUI(data);
    } catch (error) {
        alert("Error fetching weather data: " + error.message);
    }
}

// Update UI with weather data
function updateWeatherUI(data) {
    
    temp.innerHTML = `${data.current.temp_c}°C`;
    feelsLike.innerHTML = `Fells like ${data.current.feelslike_c}°C`;
    cloud.innerHTML = data.current.condition.text;
    humidity.innerHTML = `${data.current.humidity} %`;
    windSpeed.innerHTML = `${data.current.wind_kph} km/h`;
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
    
    
}

// Helper function to get weather icons
function getWeatherIcon(conditionCode) {
    const iconMap = {
        1000: "fa-sun",         // Clear sky
        1003: "fa-cloud-sun",     // Partly cloudy
        1006: "fa-cloud ",         // Cloudy
        1009: "fa-smog",          // Overcast
        1030: "fa-smog",          // Mist
        1063: "fa-cloud-rain",    // Patchy rain
        1087: "fa-bolt",          // Thunderstorm
        1114: "fa-snowflake",     // Snow
    };
    return iconMap[conditionCode] || "fa-cloud";
}

// Convert temperature between Celsius and Fahrenheit
converter.addEventListener("change", () => {
    if (temp.textContent.includes("°C")) {
        const celsius = parseFloat(temp.textContent);
        temp.textContent = `${(celsius * 9 / 5 + 32).toFixed(1)}°F`;
    } else {
        const fahrenheit = parseFloat(temp.textContent);
        temp.textContent = `${((fahrenheit - 32) * 5 / 9).toFixed(1)}°C`;
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
// Call the function to fetch user's location weather data on page load     
// findUserLocation();

# Weather App

A modern, responsive weather application that provides real-time weather information and forecasts.

## Features

- Real-time weather data using WeatherAPI
- Current weather conditions including:
  - Temperature
  - Humidity
  - Wind speed
  - Cloud coverage
  - UV index
  - Pressure
  - Sunrise/Sunset times
- 3-day weather forecast
- Temperature unit conversion (°C/°F)
- Geolocation support
- Responsive design for all devices

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- WeatherAPI
- Font Awesome icons

## Setup

1. Clone this repository
2. Get an API key from [WeatherAPI](https://www.weatherapi.com/)
3. Replace the API key in `script.js`:
   ```javascript
   const API_BASE_URL = `http://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&days=3&aqi=no&alerts=no&q=`;
   ```
4. Open `index.html` in your browser

## Usage

- Search for a city using the search bar
- Click the search icon or press Enter to get weather data
- Use the temperature converter dropdown to switch between Celsius and Fahrenheit
- Allow location access when prompted to get weather for your current location

## Screenshots

[Add screenshots of your application here]

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Created by Ravi Katiyar

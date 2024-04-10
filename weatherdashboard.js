// Fetch weather data from API
function fetchWeather() {
    // Make API call to fetch weather data
    fetch('https://api.openweathermap.org/data/2.5/weather?q=nellore&appid=c9cd9bf38ba2c3e86a2e7ff9d77196ed&units=metric')
    .then(response => response.json())
    .then(data => {
        // Update UI with weather information
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
    })
    .catch(error => console.log('Error fetching weather data:', error));
}
window.onload = fetchWeather;

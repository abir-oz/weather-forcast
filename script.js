const apiKey = 'a4b47e528de8af0ef1a6ee6280ac171d';
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';


const getWeatherData = cityName => {

    const url = `${apiBase}?q=${cityName}&units=metric&appid=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            updateUi(data);
            console.log(data)
        });
}

const searchButton = document.getElementById('search-button').addEventListener('click', () => {
    const inputCity = document.getElementById('search-input').value;

    getWeatherData(inputCity);
});


const updateUi = data => {
    document.getElementById('weather-icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)


    document.getElementById('city-name').innerText = data.name || 'Unknown Location!';

    document.getElementById('temperature').innerText = data.main.temp;

    document.getElementById('weather-status').innerText = data.weather[0].main;
}

getWeatherData('Feni');
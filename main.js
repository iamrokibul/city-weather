// API Key 
const API_KEY = `c41fd06d38bf2672fb70031b19eda9f9`;

// Load Weather API
const loadWeather = async(city) => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try{
        const res = await fetch(weatherUrl);
        const data = await res.json();
        displayWeather(data);
    }catch(error){
        console.log(error, 'API URL Not Found!')
    }
    
}

// Display Weather
const displayWeather = weather => {
    // console.log(weather);
    document.getElementById('city-name').innerText = weather.name ? weather.name : weather.message;
    if(weather.message === 'city not found'){
        document.getElementById('temperature').innerText = 'No data found!';
        document.getElementById('weather-type').innerText = 'No data found!';
    }else{
        document.getElementById('temperature').innerText = weather.main.temp;
        document.getElementById('weather-type').innerText = weather.weather[0].main;
    }
}

// Search by city name
const searchButton = document.getElementById('search_btn');
const searchField = document.getElementById('search_field');

// Search by button click
searchButton.addEventListener('click', function(){
    const cityName = searchField.value;
    loadWeather(cityName);
    searchField.value = '';
});

// Search by keyboard Enter Key
searchField.addEventListener('keydown', function(event){
    const cityName = searchField.value;
    if(event.key === "Enter"){
        event.preventDefault();
        loadWeather(cityName);
        searchField.value = '';
    }
});

// Render Weather API
loadWeather('dhaka');
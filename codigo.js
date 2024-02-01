const API_Key = 'e887212b392f8872e39692c140ac1fbc';

const fetchData = (position)=>{
    const {latitude,longitude} = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_Key}`)
        .then(response => response.json())
        .then(data =>setWeatherData(data))
}

const setWeatherData = data =>{
    console.log(data);
    const weatherData = {
        location: data.name,
        description: data.weather[0].main,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temperature: data.main.temp,
        date:'data',
    }

    Object.keys(weatherData).forEach( key =>{
        document.getElementById(key).textContent = weatherData[key];
    });
}



const Onload = ()=>{
    navigator.geolocation.getCurrentPosition(fetchData)
}



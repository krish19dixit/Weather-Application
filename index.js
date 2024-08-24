const apiKey = "1d2c44e8846fa74f6f76ef0c1a8cf856";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=matric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apiKey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)/10 + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display="none";
    }
  
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

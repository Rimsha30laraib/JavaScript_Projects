document.addEventListener("DOMContentLoaded", () => {
    const API = "619507f9f9b1b9f9c196637fb38d64a3";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
    const searchbox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon"); // Corrected selector

    async function checkWeather(city) {
        try {
            const response = await fetch(`${apiUrl}&q=${city}&appid=${API}`);
            if(response.status==404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
            }
            else{
                 
            const data = await response.json();

            console.log(data);
            if (data.cod !== 200) {
                console.error(`Error: ${data.message}`);
                document.querySelector(".city").innerHTML = "City not found";
                document.querySelector(".temp").innerHTML = "--";
                document.querySelector(".humidity").innerHTML = "--";
                document.querySelector(".wind").innerHTML = "--";
                return;
            }

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

            if (data.weather[0].main === "Clouds") {
                weatherIcon.src = "images/cloud.png"; 
            } else if (data.weather[0].main === "Rain") {
                weatherIcon.src = "images/rain.png";
            } else if (data.weather[0].main === "Drizzle") {
                weatherIcon.src = "images/drizzle.png";
            } else if (data.weather[0].main === "Snow") {
                weatherIcon.src = "images/snow.png";
            } else if (data.weather[0].main === "Clear") {
                weatherIcon.src = "images/clear.png";
            } else if (data.weather[0].main === "Haze") {
                weatherIcon.src = "images/haze.png";
            } 

            document.querySelector(".weather").style.display="block";
            document.querySelector(".error").style.display="none";

        
        }
            }

             catch (error) {
            console.error("An error occurred:", error);
            document.querySelector(".city").innerHTML = "Error fetching data";
        }
    }

    searchBtn.addEventListener("click", () => {
        const city = searchbox.value.trim();
        if (city) {
            checkWeather(city);
        } else {
            document.querySelector(".city").innerHTML = "Please enter a city";
        }
    });
});

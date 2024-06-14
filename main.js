const api_key = "c549838253fd4b07a18b2d59333e0150"; //declaring apikey
const api_url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="; //declaring apiurl
const search_box = document.querySelector(".search input");//selecting child class input by routing from search class
const search_btn = document.querySelector(".search button");//selecting child button input by routing from search class
const weatherIcon = document.querySelector(".weather-icon");//selecting weather-icon class
async function checkWeather(city){ //asynchronous function that checks weather
    const response = await fetch (api_url + city + `&appid=${api_key}`); //declaring constant response that waits and fetches from the concatenaion of the apiurl city and apikey, uses it to fetch weather details for a giving country.

    if(response.status == 404){//error handling: say you enter something than a city or misspell lol, e go handle your papa error.
        document.querySelector(".error").style.display = "block";//checks and selects the element with class "error" in "style.html and since it's set to none it displays as  display as block  "
        document.querySelector(".weather").style.display = "none";
    } else{

        let data = await response.json();//since the api stuff is prolly written in json we need to the aleady initialized respond but .json this time

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;//selects element with classname "city and initializes it to the city name data"
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if(data.weather[0].main == "Clouds"){ //changes pictures depending on the atmospheric state given by the api
        weatherIcon.src = "images/clouds.png";
    } else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    } else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "block";

    }

    
    
}

search_btn.addEventListener("click", ()=>{//event listener monitors the click function, and checks weathers based on the search box input value
    checkWeather(search_box.value);
})
checkWeather();
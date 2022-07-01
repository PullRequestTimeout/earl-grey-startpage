// Dark Mode -----------------------------------------------------------------------------
document.getElementById("darkModeToggle").checked = false


const darkModeSwitch = document.getElementById("darkModeToggle");

darkModeSwitch.addEventListener('change', toggleDarkStyles);

function toggleDarkStyles(){
    if (darkModeSwitch.checked == true) {
        // Dark mode
        document.getElementById("darkmode").setAttribute("href", "dark.css");
    } else {
        // Light Mode
        document.getElementById("darkmode").setAttribute("href", "light.css");
}};

// Weather Widget ------------------------------------------------------------------------

// SVG Variables

const thunderstormIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-cloud-storm\" width=\"100\" height=\"100\" viewBox=\"0 0 24 24\" stroke-width=\"0.9\" stroke=\"#002C54\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1\" /><polyline points=\"13 14 11 18 14 18 12 22\" /></svg>";

const cloudsIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-cloud\" width=\"100\" height=\"100\" viewBox=\"0 0 24 24\" stroke-width=\"0.9\" stroke=\"#002C54\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12\" /></svg>";

const drizzleIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-cloud-snow\" width=\"100\" height=\"100\" viewBox=\"0 0 24 24\" stroke-width=\"0.9\" stroke=\"#002C54\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7\" /><path d=\"M11 15v.01m0 3v.01m0 3v.01m4 -4v.01m0 3v.01\" /></svg>";

const rainIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-cloud-rain\" width=\"100\" height=\"100\" viewBox=\"0 0 24 24\" stroke-width=\"0.9\" stroke=\"#002C54\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7\" /><path d=\"M11 13v2m0 3v2m4 -5v2m0 3v2\" /></svg>";

const snowIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-snowflake\" width=\"100\" height=\"100\" viewBox=\"0 0 24 24\" stroke-width=\"0.9\" stroke=\"#002C54\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M10 4l2 1l2 -1m-2 -2v6.5l3 1.72\" /><path d=\"M10 4l2 1l2 -1m-2 -2v6.5l3 1.72\" transform=\"rotate(60 12 12)\" /><path d=\"M10 4l2 1l2 -1m-2 -2v6.5l3 1.72\" transform=\"rotate(120 12 12)\" /><path d=\"M10 4l2 1l2 -1m-2 -2v6.5l3 1.72\" transform=\"rotate(180 12 12)\" /><path d=\"M10 4l2 1l2 -1m-2 -2v6.5l3 1.72\" transform=\"rotate(240 12 12)\" /><path d=\"M10 4l2 1l2 -1m-2 -2v6.5l3 1.72\" transform=\"rotate(300 12 12)\" /></svg>";

const clearIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-sun\" width=\"100\" height=\"100\" viewBox=\"0 0 24 24\" stroke-width=\"0.9\" stroke=\"#002C54\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><circle cx=\"12\" cy=\"12\" r=\"4\" /><path d=\"M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7\" /></svg>";

const fogIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-mist\" width=\"100\" height=\"100\" viewBox=\"0 0 24 24\" stroke-width=\"0.9\" stroke=\"#002C54\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M5 5h3m4 0h9\" /><path d=\"M3 10h11m4 0h1\" /><path d=\"M5 15h5m4 0h7\" /><path d=\"M3 20h9m4 0h3\" /></svg>";

// OpenWeatherMap API

const weatherWidget = document.getElementById("weatherIcon");

fetch("https://api.openweathermap.org/data/2.5/weather?lat=49.07804610421704&lon=-117.80089689845951&appid=464f77339fb17e890968824a382be54b&units=metric')")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);

    if (data.weather[0].main == "Thunderstorm") { 
        weatherWidget.innerHTML = thunderstormIcon;
    }else if (data.weather[0].main == "Clouds") { 
        weatherWidget.innerHTML = cloudsIcon;
    } else if (data.weather[0].main == "Drizzle") { 
        weatherWidget.innerHTML = drizzleIcon;
    } else if (data.weather[0].main == "Rain") { 
        weatherWidget.innerHTML = rainIcon;
    } else if (data.weather[0].main == "Snow") { 
        weatherWidget.innerHTML = snowIcon;
    } else if (data.weather[0].main == "Clear") { 
        weatherWidget.innerHTML = clearIcon;
    } else if (data.weather[0].main == "Mist" || "Smoke" || "Haze" || "Dust" || "Fog") { 
        weatherWidget.innerHTML = fogIcon;
    }
  });


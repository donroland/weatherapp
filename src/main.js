import {
    getWeatherByCity
} from "./apiService.js";

const viewElements = {};

const getDOMElement = id => document.getElementById(id);

const connectHTMLElements = () => {
    viewElements.mainContainer = getDOMElement("mainContainer");
    viewElements.weatherSearchView = getDOMElement("weatherSearchView");
    viewElements.weatherForecastView = getDOMElement("weatherForecastView");

    viewElements.searchInput = getDOMElement("searchInput");
    viewElements.searchButton = getDOMElement("searchButton");
    viewElements.weatherCityContainer = getDOMElement("weatherCityContainer");

    viewElements.weatherCity = getDOMElement("weatherCity");
    viewElements.weatherIcon = getDOMElement("weatherIcon");

    viewElements.weatherCurrentTemp = getDOMElement("weatherCurrentTemp");
    viewElements.weatherMaxTemp = getDOMElement("weatherMaxTemp");
    viewElements.weatherMinTemp = getDOMElement("weatherMinTemp");

    viewElements.returnToSearchBtn = getDOMElement("returnToSearchBtn");
};

const setupListeners = () => {
    viewElements.searchInput.addEventListener("keydown", onEnterSubmit);
    viewElements.searchButton.addEventListener("click", onClickSubmit);
    viewElements.returnToSearchBtn.addEventListener("click", returnToSearch);
};

const initializeApp = () => {
    connectHTMLElements();
    setupListeners();
};

const onEnterSubmit = event => {
    if (event.key === "Enter") {
        fadeInOut();
        let query = viewElements.searchInput.value;
        getWeatherByCity(query).then(data => {
            displayWeatherData(data);
        });
    };
};

const onClickSubmit = () => {
    fadeInOut();
    let query = viewElements.searchInput.value;
    getWeatherByCity(query).then(data => {
        displayWeatherData(data);
    });
};

const displayWeatherData = data => {
    switchView();
    fadeInOut();

    const weather = data.consolidated_weather[0];

    viewElements.weatherCity.innerText = data.title;
    viewElements.weatherIcon.src = `https://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg`;
    viewElements.weatherIcon.alt = weather.weather_state_name;

    const currentTemp = weather.the_temp.toFixed(2);
    const maxTemp = weather.max_temp.toFixed(2);
    const minTemp = weather.min_temp.toFixed(2);

    viewElements.weatherCurrentTemp.innerText = `Current temperature: ${currentTemp}`;
    viewElements.weatherMaxTemp.innerText = `Max temperature ${maxTemp}`;
    viewElements.weatherMinTemp.innerText = `Min temperature ${minTemp}`;

}

const fadeInOut = () => {
    if (viewElements.mainContainer.style.opacity === "1" || viewElements.mainContainer.style.opacity === "") {
        viewElements.mainContainer.style.opacity = "0";
    } else {
        viewElements.mainContainer.style.opacity = "1";
    }
}

const switchView = () => {
    if (viewElements.weatherSearchView.style.display !== "none") {
        viewElements.weatherSearchView.style.display = "none";
        viewElements.weatherForecastView.style.display = "block";
    } else {
        viewElements.weatherForecastView.style.display = "none";
        viewElements.weatherSearchView.style.display = "flex";
    }
};

const returnToSearch = () => {
    fadeInOut();

    setTimeout(() => {
        switchView();
        fadeInOut();
    }, 500);
}

document.addEventListener("DOMContentLoaded", initializeApp);
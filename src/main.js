import { getWeatherByCity } from "./apiService.js";

const viewElements = {};

const getDOMElement = id => document.getElementById(id);

const connectHTMLElements = () => {
    viewElements.mainContainer = getDOMElement("mainContainer");
    viewElements.weatherSearchView = getDOMElement("weatherSearchView");
    viewElements.weatherForecastView = getDOMElement("weatherSearchView");

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
};

const initializeApp = () => {
    connectHTMLElements();
    setupListeners();
};

const onEnterSubmit = event => {
    if (event.key === "Enter") {
        let query = viewElements.searchInput.value;
        getWeatherByCity(query);
    }
};
const onClickSubmit = () => {};

document.addEventListener("DOMContentLoaded", initializeApp);